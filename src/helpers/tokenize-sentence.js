/**
 * Expects a string (a paragraph of text),
 * returns an array of objects with the following shape
 * {
 *  value,
 *  isActive,
 *  id,
 * }
 *
 * @param {String} sentence
 * @returns {Array}
 */

import { nanoid } from '@reduxjs/toolkit';

export default function tokenizeSentence(sentence) {
  if (typeof sentence !== 'string')
    throw new Error(
      `tokenizeSentence expected 'string' but was given '${typeof sentence}'`
    );

  if (sentence.length === 0) return [];

  return sentence.split(' ').map((token) => ({
    value: token,
    isActive: true,
    id: nanoid(),
  }));
}
