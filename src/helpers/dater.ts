export class Dater extends Date {
  today = new Date();
  calendar: Date[][] | string[][] = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
  ];
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  firstCalendarDay(dateToStart: Date): Date {
    return new Date(
      this.getYear(dateToStart),
      this.getMonthNumber(dateToStart),
      1
    );
  }

  numberOfDaysInMonth(dateToStart: Date): number {
    return new Date(
      this.getYear(dateToStart),
      this.getMonthNumber(dateToStart),
      0
    ).getDate();
  }

  getDayName(day: Date): string {
    return this.days[day.getDay()];
  }

  getDayNumber(day: Date): number {
    return day.getDate();
  }

  getMonthName(day: Date): string {
    return this.months[day.getMonth()];
  }

  getMonthNumber(day: Date): number {
    return day.getMonth();
  }

  getYear(day: Date): number {
    return day.getFullYear();
  }

  initTodayCalendar(dateToStart: Date): Date[][] | string[][] {
    console.time('initCal');
    const firstDayOnCalendar: Date = this.firstCalendarDay(dateToStart);
    let dayIndex: number = 0;
    let dayNumber: number = 1;
    let weekIndex: number = 0;

    for (let i = 0; i < this.numberOfDaysInMonth(dateToStart); i++) {
      if (i === 0) {
        dayIndex = 1;
        this.calendar[weekIndex][dayIndex] = firstDayOnCalendar;
      } else {
        this.calendar[weekIndex][dayIndex] = new Date(
          dateToStart.getFullYear(),
          dateToStart.getMonth(),
          dayNumber
        );
      }

      dayNumber = dayNumber + 1;

      if (dayIndex === 6) {
        weekIndex = weekIndex + 1;
        dayIndex = 0;
        continue;
      }
      dayIndex = dayIndex + 1;
    }
    console.timeEnd('initCal');
    return this.calendar;
  }
}
