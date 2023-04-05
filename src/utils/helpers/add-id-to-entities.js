/**
 * Expects array of values,
 * returns array of objects with value and id props
 *
 * @param {Array} values
 * @returns {Array}
 */

import { nanoid } from '@reduxjs/toolkit';

export default function addIdToEntities(values) {
  // .filter here to filter out empty/undefined values
  return values.filter(Boolean).map((value) => ({
    value,
    id: nanoid(),
  }));
}
