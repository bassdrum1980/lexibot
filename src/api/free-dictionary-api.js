import { wordInstance } from 'api/axios';
import { HttpError } from 'errors/http-errors';

/**
 * Fetch 'word' data from the Free Dictionary API
 * !!omitting translationEnabled and targetLanguage flags!!
 * @param {String} word // word id
 */
export const fetchFreeDictionary = async ({ word, token }) => {
  try {
    const response = await wordInstance.get(`/${word}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new HttpError(
        'error',
        'Oops! Word Not Found',
        "We couldn't find a definition for the word you entered. Please check for any typos and try again.",
        404
      );
    }
    throw new HttpError(
      'error',
      'Something Went Wrong',
      "We're sorry, but there was an issue with the server. Please try again later.",
      error?.response?.status
    );
  }
};
