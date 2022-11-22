/**
 * Expects an array of entries,
 * not all entries have audio urls,
 * returns the url from the first entry that got one
 *
 * @param {Array} phonetics
 * @returns {String} audio-file url
 */

export default function getAudioUrl(phonetics) {
  if (!Array.isArray(phonetics)) {
    return '';
  }
  // there are might be multiple phonetics entries,
  // for the simplicity sake I take the first one
  const { audio: url } = phonetics.find((entry) => Boolean(entry.audio)) || {
    audio: '',
  };

  return url;
}
