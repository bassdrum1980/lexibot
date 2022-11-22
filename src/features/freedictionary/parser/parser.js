/**
 * Parses the raw data from the free dictionary api,
 * returns an array of meanings
 * ('meaning' — a set of definitions that share
 * same part of speech, phonetics and, sometimes, thesaurus).
 * @param {Array} apiData
 * @returns {Array} of meanings
 */

// получает массив lexical entries — проверить массив ли это?
//

import getAudioUrl from './get-audio-url';
import makeMeaning from './make-meaning';

const parser = (apiData) => {
  // resulting array of definitions grouped by meanings
  const meanings = [];

  // apiData is an array of lexical entries
  apiData.forEach((lexical) => {
    // meanings share same word id and phonetics, coming from their lexical entry
    const {
      meanings: sourceMeanings,
      word,
      phonetic: transcription,
      phonetics,
    } = lexical;
    const audioUrl = getAudioUrl(phonetics);

    // meaning includes up to several definitions,
    // shares part of speech and word id among them
    sourceMeanings.forEach((sourceMeaning) => {
      const meaning = makeMeaning(sourceMeaning, word, transcription, audioUrl);
      meanings.push(meaning);
    });
  });

  return meanings;
};

export default parser;
