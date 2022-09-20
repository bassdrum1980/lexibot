/**
 * Parses the raw data from the free dictionary api,
 * makes and returns an array of meanings
 * ('meaning' — a set of definitions that share
 * part of speech, phonetics and, sometimes, thesaurus).
 * @param {Array} apiData
 * @returns {Array} of meanings
 */

import { nanoid } from '@reduxjs/toolkit';

/* eslint-disable no-restricted-syntax */
const parser = (apiData) => {
  // resulting array of definitions grouped by meanings
  const meanings = [];

  // apiData is an array of lexical entries
  apiData.forEach((lexical) => {
    // lexical entry shares wordId and phonetics among multiple meanings
    const { word } = lexical;

    // TODO: how to pick a proper phonetic?
    const phoneticsText = '';
    const phoneticsAudio = '';

    // meaning includes up to several definitions,
    // shares part of speech and word id among them
    lexical.meanings.forEach((m) => {
      const { partOfSpeech } = m;

      const meaning = {};
      meaning.definitions = [];
      meaning.partOfSpeech = partOfSpeech;
      meaning.id = nanoid();

      // definition is the smallest particicle of data
      m.definitions.forEach((d) => {
        const definition = {};
        definition.word = word;
        definition.phoneticsText = phoneticsText;
        definition.phoneticsAudio = phoneticsAudio;
        definition.partOfSpeech = partOfSpeech;
        definition.definition = d.definition;
        definition.synonyms = [...d.synonyms];
        definition.antonyms = [...d.antonyms];
        definition.example = d.example;
        definition.id = nanoid();
        meaning.definitions.push(definition);
      });
      meanings.push(meaning);
    });
  });

  return meanings;
};

export default parser;
