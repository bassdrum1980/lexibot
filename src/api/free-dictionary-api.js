import { wordInstanceFreeDictionary } from 'api/axios';

// TODO: error handling

/**
 * Fetch 'word' data from the json-server db
 * !!omitting translationEnabled and targetLanguage flags!!
 * @param {String} word // word id
 */
export const fetchFreeDictionary = async (word) => {
  try {
    const response = await wordInstanceFreeDictionary.get(`/${word}`);
    return response.data;
  } catch (error) {
    throw new Error('Word Not Found');
  }
};
