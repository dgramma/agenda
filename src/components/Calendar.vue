<template>
  <div class="calendar">
    <div class="calender_header calendar_row">
      <div v-for="day in daysArray" class="calendar_header_day">
        <span class="calendar_header_day-name">{{ day }}</span>
      </div>
    </div>
    <div v-for="week in calendar" class="calendar_row">
      <div
        v-for="day in week"
        class="calendar_row_day"
        :class="checkDayType(day) ? checkDayType(day) : ''"
        :data-day="day"
      >
        <span class="calendar_row_day-number">{{
          day ? day.getDate() : ''
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Dater } from '../helpers/dater';
const dater = new (Dater as any)();

const dateToday: number = dater.today().day;
const daysArray: object = dater.days;
const calendar: void = ref(dater.initTodayCalendar());

function checkDayType(day: any) {
  let classArray: string[] = [];

  new Date(day).getDate() === dateToday ? classArray.push('current') : null;
  !day ? classArray.push('non-month') : null;

  return classArray.length > 1 ? classArray.join(' ') : classArray;
}

onMounted(() => {
  console.log(dateToday);
});
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 600px;
}

.calendar_row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.calendar_row_day {
  border: 1px solid #ddd;
  display: block;
  height: 100px;
  position: relative;
  width: calc(100% / 7);

  &.current {
    background-color: #333;
    color: #fff;
    font-weight: 700;
  }

  .calendar_row_day-number {
    position: absolute;
    top: 0;
    right: 2px;
  }
}

.calendar_header_day-name {
  width: calc(100% / 7);
}
</style>
