import { wordInstance } from './api';

/**
 * Fetch universal user ID and preferences from the json-server db
 * (universal ID — legacy, the app used to work with various
 * messengers simultaneously)
 * Timezone is used to set a correct user's timezone in the DB.
 * TODO: make an additional api request for setting timezone offset.
 *
 * @param {Object}
 *    @param {String} tgid // telegram ID
 *    @param {Number} timezone // current user's offset in hours
 *
 * @success
 *    @param {String} userId
 *    @param {Boolean} autoPlayEnabled auto plays audio
 *    @param {Boolean} translationEnabled
 *    @param {String} targetLanguage
 */
export const fetchUserAttributes = async ({ tgid }) => {
  const response = await fetch(`http://localhost:3001/users?tgid=${tgid}`);
  const users = await response.json();

  if (users.length) {
    return { data: users[0] };
  }
  throw new Error('User Not Found');
};

/**
 * Fetch 'word' data from the json-server db
 * !!omitting translationEnabled and targetLanguage flags!!
 * @param {String} word // word id
 */
export const fetchFreeDictionary = async ({ word }) => {
  try {
    const response = await wordInstance.get(`/${word}`);
    return response.data;
  } catch (error) {
    throw new Error('Word Not Found');
  }
};
