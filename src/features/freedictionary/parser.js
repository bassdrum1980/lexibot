/* eslint-disable no-restricted-syntax */
import cloneDeep from 'lodash/cloneDeep';
import { nanoid } from '@reduxjs/toolkit';

/**
 * @param {*} raw 
 * @returns 
 */

const parser = (raw) => {
  // Clone incoming data
  const apiData = cloneDeep(raw);

  // Resulting array of definitions groupped by meanings
  const meanings = [];

  // API returns an array of lexical entries
  for (const lexical of apiData) {
    // lexical entry shares wordId and phonetics among multiple meanings
    const { word } = lexical;
    // TODO: how to select a proper phonetic?
    const phoneticsText = '';
    const phoneticsAudio = '';

    // meaning includes several definitions of same part of speech
    for (const elem of lexical.meanings) {
      const { partOfSpeech } = elem;

      const meaning = {};
      meaning.definitions = [];
      meaning.partOfSpeech = partOfSpeech;

      // definition is the smallest particicle of data
      for (const def of elem.definitions) {
        const definition = {};
        definition.word = word;
        definition.phoneticsText = phoneticsText;
        definition.phoneticsAudio = phoneticsAudio;
        definition.partOfSpeech = partOfSpeech;
        definition.definition = def.definition;
        definition.synonyms = [...def.synonyms];
        definition.antonyms = [...def.antonyms];
        definition.example = def.example;
        definition.id = nanoid();
        meaning.definitions.push(definition);
      }

      meanings.push(meaning);
    }
  }

  return meanings;
};

export default parser;
