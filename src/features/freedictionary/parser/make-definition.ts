/**
 * Expects a raw definition object
 * + extra few arguments,
 * builds and returns a self-sufficient definition object.
 */

import { nanoid } from '@reduxjs/toolkit';
import { addIdToEntities, tokenizeSentence } from 'helpers/index.js';
import {
  Entity,
  Token,
  RawDefinition,
  Definition,
} from 'types/free-dictionary/index';

// TODO: move types to a separate file
// TODO: update corresponding tests

export default function makeDefinition(
  sourceDefinition: RawDefinition,
  word: string,
  transcription: string,
  audioUrl: string,
  partOfSpeech: string
): Definition {
  // The current API gives us one example maximum per definition (string),
  // some definitions don't have example (undefined).
  // I want 'examples' to be an array
  // (since the user can add custom examples on ConfigureCard level).
  let examples: Entity[] = [];

  if (sourceDefinition.example) {
    // Example is tokenized, it allows me easily crop/uncrop it
    // on ConfigureCard level.
    const tokenizedExample: Token[] = tokenizeSentence(
      sourceDefinition.example
    );

    examples = addIdToEntities([tokenizedExample]);
  }

  const definition: Definition = {
    word,
    phoneticsText: transcription,
    phoneticsAudio: audioUrl,
    partOfSpeech,
    definition: sourceDefinition.definition,
    synonyms: addIdToEntities(sourceDefinition.synonyms),
    antonyms: addIdToEntities(sourceDefinition.antonyms),
    examples,
    id: nanoid(),
  };

  return definition;
}
