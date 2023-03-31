import { wordInstanceFreeDictionary } from 'api/axios';

class CustomError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
    this.message = message;
  }
}

/**
 * Fetch 'word' data from the Free Dictionary API
 * !!omitting translationEnabled and targetLanguage flags!!
 * @param {String} word // word id
 */
export const fetchFreeDictionary = async (word) => {
  try {
    const response = await wordInstanceFreeDictionary.get(`/${word}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new CustomError(
        'Oops! Word not found',
        "We couldn't find a definition for the word you entered. Please check for any typos and try again."
      );
    }
    throw new CustomError(
      'Something went wrong',
      "We're sorry, but there was an issue with the server. Please try again later."
    );
  }
};
