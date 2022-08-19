<template>
  {{ thisDay }}
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Dater } from '../helpers/dater';

const dater = new (Dater as any)();
const thisDay = ref(dater.getDayName());

onMounted(() => {
  dater.initCalendar();
});
</script>

<style lang="scss" scoped></style>
