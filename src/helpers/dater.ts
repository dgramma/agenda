export function Dater(): {} {
  const calendar: string[][] | Date[][] = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
  ];
  const today = () => {
    const dateToday = new Date();

    return {
      date: dateToday,
      year: dateToday.getFullYear(),
      month: dateToday.getMonth(),
      day: dateToday.getDate(),
    };
  };
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
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

  const firstCalendarDay = () => {
    return new Date(today().year, today().month, 1);
  };

  function daysInThisMonth() {
    return new Date(today().year, today().month, 0).getDate();
  }

  const getDayName = (): string => {
    return days[today().day];
  };

  const getDayNumber = (): number => {
    return today().day;
  };

  const getMonthName = (): string => {
    return months[today().month];
  };

  const getMonthNumber = (): number => {
    return today().month;
  };

  function initTodayCalendar(): Date[][] | string[][] {
    console.time('initCal');
    const firstDayOnCalendar: Date = firstCalendarDay();
    let dayIndex: number = 0;
    let dayNumber: number = 1;
    let weekIndex: number = 0;

    for (let i = 0; i < daysInThisMonth(); i++) {
      if (i === 0) {
        dayIndex = 1;
        calendar[weekIndex][dayIndex] = firstDayOnCalendar;
      } else {
        calendar[weekIndex][dayIndex] = new Date(
          today().year,
          today().month,
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
    return calendar;
  }

  return {
    getDayName,
    getDayNumber,
    getMonthName,
    getMonthNumber,
    today,
    days,
    firstCalendarDay,
    initTodayCalendar,
  };
}
