import getAudioUrl from './get-audio-url';

const phoneticsUrl = [
  { text: '/fɑːst/', audio: '' },
  {
    text: '/fæst/',
    audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/fast-uk.mp3',
    sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=9014431',
    license: {
      name: 'BY 3.0 US',
      url: 'https://creativecommons.org/licenses/by/3.0/us',
    },
  },
  {
    text: '/fæst/',
    audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/fast-us.mp3',
    sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=195880',
    license: {
      name: 'BY-SA 3.0',
      url: 'https://creativecommons.org/licenses/by-sa/3.0',
    },
  },
];

const phoneticsUrlExpected =
  'https://api.dictionaryapi.dev/media/pronunciations/en/fast-uk.mp3';

const phoneticsNoUrl = [
  { text: '/fɑːst/', audio: '' },
  { text: '/fɑːst/', audio: '' },
];

describe('sunny day', () => {
  test('founds first entry with audio url and returns it', () => {
    expect(getAudioUrl(phoneticsUrl)).toBe(phoneticsUrlExpected);
  });

  test('if no entry has audio > returns empty url', () => {
    expect(getAudioUrl(phoneticsNoUrl)).toBe('');
  });

  test('if receives non-array > returns empty url', () => {
    expect(getAudioUrl(undefined)).toBe('');
    expect(getAudioUrl('')).toBe('');
    expect(getAudioUrl(null)).toBe('');
    expect(getAudioUrl({})).toBe('');
  });

  test('if receives an empty array > returns empty url', () => {
    expect(getAudioUrl([])).toBe('');
  });
});
