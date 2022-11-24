import makeMeaning from './make-meaning';

const word = 'fast';
const transcription = '/fɑːst/';
const audioUrl =
  'https://api.dictionaryapi.dev/media/pronunciations/en/fast-uk.mp3';
const meaning = {
  partOfSpeech: 'adjective',
  definitions: [
    {
      definition: 'Firmly or securely fixed in place; stable.',
      synonyms: ['firm', 'immobile', 'secure', 'stable', 'stuck', 'tight'],
      antonyms: ['loose'],
      example: 'That rope is dangerously loose. Make it fast!',
    },
    {
      definition:
        'Firm against attack; fortified by nature or art; impregnable; strong.',
      synonyms: ['fortified', 'impenetrable'],
      antonyms: ['penetrable', 'weak'],
    },
  ],
};

describe('sunny day scenarios', () => {
  const result = makeMeaning(meaning, word, transcription, audioUrl);

  test('meaning has definitions', () => {
    expect(result).toHaveProperty('definitions');
  });

  test('meaning.definitions is array', () => {
    expect(result.definitions).toBeInstanceOf(Array);
  });

  test('meaning has partOfSpeech', () => {
    expect(result).toMatchObject({
      partOfSpeech: meaning.partOfSpeech,
    });
  });

  test('meaning has id', () => {
    expect(result).toHaveProperty('id');
  });
});
