/**
 * Expects a raw definition object
 * + extra few arguments,
 * builds and returns a self-sufficient definition object.
 *
 * @param {Object} sourceDefinition
 * @param {String} word
 * @param {String} transcription
 * @param {String} audioUrl
 * @param {String} partOfSpeech
 * @returns {Object}
 */

import { nanoid } from '@reduxjs/toolkit';

export default function makeDefinition(
  sourceDefinition,
  word,
  transcription,
  audioUrl,
  partOfSpeech
) {
  const definition = {};
  definition.word = word;
  definition.phoneticsText = transcription;
  definition.phoneticsAudio = audioUrl;
  definition.partOfSpeech = partOfSpeech;
  definition.definition = sourceDefinition.definition;
  definition.synonyms = [...sourceDefinition.synonyms];
  definition.antonyms = [...sourceDefinition.antonyms];
  // the current API gives us one or zero examples per definition
  // (string / empty string)
  // I still want it to be an array
  // (since the user can add custom examples)
  definition.examples = sourceDefinition.example
    ? [{ value: sourceDefinition.example, id: nanoid() }]
    : [];
  definition.id = nanoid();
  return definition;
}
