/**
 * Parses the raw data from the free dictionary api,
 * makes and returns an array of meanings
 * ('meaning' — a set of definitions that share
 * part of speech, phonetics and, sometimes, thesaurus).
 * @param {Array} apiData
 * @returns {Array} of meanings
 */

import { nanoid } from '@reduxjs/toolkit';

const parser = (apiData) => {
  // resulting array of definitions grouped by meanings
  const resMeanings = [];

  // apiData is an array of lexical entries
  apiData.forEach((lexical) => {
    // meanings get same word id and phonetics from their lexical entry
    const { meanings, word, phonetic: transcription, phonetics } = lexical;
    // there are might be multiple phonetics entries,
    // for the simplicity sake I take the first one
    const { audio } = phonetics.find((entry) => Boolean(entry.audio)) || {
      audio: null,
    };

    // meaning includes up to several definitions,
    // shares part of speech and word id among them
    meanings.forEach((meaning) => {
      const { partOfSpeech, definitions } = meaning;

      const resMeaning = {};
      resMeaning.definitions = [];
      resMeaning.partOfSpeech = partOfSpeech;
      resMeaning.id = nanoid();

      // definition is the smallest particicle of data
      definitions.forEach((definition) => {
        const resDefinition = {};
        resDefinition.word = word;
        resDefinition.phoneticsText = transcription;
        resDefinition.phoneticsAudio = audio;
        resDefinition.partOfSpeech = partOfSpeech;
        resDefinition.definition = definition.definition;
        resDefinition.synonyms = [...definition.synonyms];
        resDefinition.antonyms = [...definition.antonyms];
        resDefinition.examples = [definition.example].filter(Boolean);
        resDefinition.id = nanoid();
        resMeaning.definitions.push(resDefinition);
      });
      resMeanings.push(resMeaning);
    });
  });

  return resMeanings;
};

export default parser;
