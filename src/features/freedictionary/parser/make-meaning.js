/**
 * Expects a raw 'meaning' object
 * + extra few arguments,
 * builds and returns a usable 'meaning' object
 * with a set of ready-to-use definitions
 * @param {Object} sourceMeaning
 * @param {String} word
 * @param {String} transcription
 * @param {String} audioUrl
 * @returns {Object}
 */

import { nanoid } from '@reduxjs/toolkit';
import makeDefinition from './make-definition';

export default function makeMeaning(
  sourceMeaning,
  word,
  transcription,
  audioUrl
) {
  const { partOfSpeech, definitions } = sourceMeaning;

  const meaning = {};
  meaning.definitions = [];
  meaning.partOfSpeech = partOfSpeech;
  meaning.id = nanoid();

  // definition is the smallest particicle of data
  definitions.forEach((sourceDefinition) => {
    const definition = makeDefinition(
      sourceDefinition,
      word,
      transcription,
      audioUrl,
      partOfSpeech
    );
    meaning.definitions.push(definition);
  });

  return meaning;
}
