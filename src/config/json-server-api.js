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
 * (I downloaded and saved a few jsons from Free Dictionary API)
 * !! I'm omitting translationEnabled and targetLanguage flags in this version!!
 * @param {String} word // word id
 * @success
 *    @param {String} word
 *    @param {Array} data
 */
export const fetchFreeDictionary = async ({ word }) => {
  const response = await fetch(`http://localhost:3001/words/${word}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.statusText);
};
