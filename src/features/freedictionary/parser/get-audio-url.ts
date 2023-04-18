/**
 * Expects an array of entries,
 * not all entries have audio urls,
 * returns the url from the first entry that got one
 */

import { RawPhonetic } from 'types/free-dictionary/index';

export default function getAudioUrl(phonetics: RawPhonetic[]): string {
  // TODO: remove the following code after the outer code migrated to .TS as well
  // update tests too
  if (!Array.isArray(phonetics)) {
    return '';
  }
  // there are might be multiple phonetics entries,
  // for the simplicity sake I take the first one
  const { audio: url } = phonetics.find((p) => Boolean(p.audio)) || {
    audio: '',
  };

  return url;
}
