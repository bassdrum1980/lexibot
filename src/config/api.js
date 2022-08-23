import { httpsCallable } from 'firebase/functions';
import { functions } from 'config/firebase';

/**
 * Fetch universal user ID and preferences
 * (universal ID — legacy, the app used to work with various
 * messengers simultaneously)
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
 *
 * @errorcase Server Error — any error on the server side
 * @errorcase Connection Failed — // TODO: что делать с этим кейсом?
 */
export const fetchUserAttributes = httpsCallable(functions, 'fetchUserAttributes');
