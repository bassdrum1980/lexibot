/**
 * @param {Array} stats - number of cards per day the user studied
 * for the last seven days
 * @returns {Array} - consists of objects with weekday's name and 'isPracticed' flag
 */
import { nanoid } from '@reduxjs/toolkit';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const getWeekStats = (stats) => {
  // I'm using a more familiar scale where Sunday is the 7th day of the week.
  const currentWeekDay = new Date().getDay() ? new Date().getDay() : 7;

  // 1. Backend API fills 'stats' from right to left (past > future);
  // 2. 'stats' reflects statistics for the past seven days, but the component
  // shows the statistics for the current week only.
  // Hence I reverse 'stats' and cut off extra days.
  const currentWeekStats = [...stats].reverse().slice(-currentWeekDay);

  return days.map((day, i) => ({
    id: nanoid(),
    day,
    isPracticed: !!currentWeekStats[i],
  }));
};
