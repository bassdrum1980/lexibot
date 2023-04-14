/**
 * Expects an array of entries,
 * not all entries have audio urls,
 * returns the url from the first entry that got one
 */

type Phonetics = {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
};

export default function getAudioUrl(phonetics: Phonetics[]): string {
  // TODO: remove the following code after the outer code migrated to .ts as well
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
