/**
 * Caclculates timezone offset,
 * is used to correct user's timezone in DB
 * @returns {Number} timezone offset in hours
 */
export const calculateOffset = () => {
  const offset = new Date().getTimezoneOffset();
  if (offset) {
    return (offset / 60) * -1;
  }
  return 0;
};
