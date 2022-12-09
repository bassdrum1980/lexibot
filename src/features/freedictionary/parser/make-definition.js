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
import { addIdToEntities, tokenizeSentence } from 'helpers';

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
  definition.id = nanoid();

  // The current API gives us one example maximum per definition (string),
  // some definitions don't have example (undefined).
  if (sourceDefinition.example) {
    // Example is tokenized, it allows me easily crop/uncrop it
    // on ConfigureCard level.
    const tokenizedExample = tokenizeSentence(sourceDefinition.example);
    // I want 'examples' to be an array
    // (since the user can add custom examples on ConfigureCard level).
    definition.examples = addIdToEntities([tokenizedExample]);
  } else {
    definition.examples = [];
  }

  return definition;
}
