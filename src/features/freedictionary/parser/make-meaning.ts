/**
 * Expects a raw 'meaning' object
 * + extra few arguments,
 * builds and returns a usable 'meaning' object
 * with a set of ready-to-use definitions
 */

import { nanoid } from '@reduxjs/toolkit';
import makeDefinition from './make-definition';
import { RawMeaning, Meaning, Definition } from 'types/free-dictionary';

export default function makeMeaning(
  rawMeaning: RawMeaning,
  word: string,
  transcription: string,
  audioUrl: string
): Meaning {
  const { partOfSpeech, definitions } = rawMeaning;

  const meaning: Meaning = {
    definitions: [],
    partOfSpeech,
    id: nanoid(),
  };

  // definition is the smallest particicle of data
  definitions.forEach((rawDefinition) => {
    const definition: Definition = makeDefinition(
      rawDefinition,
      word,
      transcription,
      audioUrl,
      partOfSpeech
    );
    meaning.definitions.push(definition);
  });

  return meaning;
}
