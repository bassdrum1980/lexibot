/**
 * @param {Array} stats - исходный массив с кол-вом пройденных карточек
 * в тренировке за каждый из последних 7-ми дней
 * @returns {Array} - массив из объектов, с именем дня недели и флагом isPracticed
 */
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const getWeekStats = (stats) => {
  // текущий день недели
  // если воскресенье, меняю на 7-ку
  const currentWeekDay = new Date().getDay() ? new Date().getDay() : 7;
  // поскольку в stats направление прошлое-будущее идет
  // справа-налево (так реализован api) => реверс массива
  // затем я отрезаю лишние дни
  // (итоговый компонент показывает только дни текущей недели,
  // а массив stats это 7 последних дней).
  const currentWeekStats = [...stats].reverse().slice(-currentWeekDay);

  // возвращаю массив объектов с днями недели и флагом тренировки
  return days.map((day, i) => ({
    day,
    isPracticed: !!currentWeekStats[i],
  }));
};
