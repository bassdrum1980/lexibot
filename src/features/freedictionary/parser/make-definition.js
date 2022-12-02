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
import { addIdToEntities } from 'helpers';

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
  definition.synonyms = addIdToEntities(sourceDefinition.synonyms);
  definition.antonyms = addIdToEntities(sourceDefinition.antonyms);
  // the current API gives us one or zero examples per definition
  // (string / undefined)
  // I still want it to be an array
  // (since the user can add custom examples)
  definition.examples = addIdToEntities([sourceDefinition.example]);
  definition.id = nanoid();
  return definition;
}
