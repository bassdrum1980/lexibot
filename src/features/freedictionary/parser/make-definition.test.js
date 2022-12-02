import makeDefinition from './make-definition';

const word = 'prudent';
const transcription = '/ˈpɹuːdənt/';
const audioUrl =
  'https://api.dictionaryapi.dev/media/pronunciations/en/prudent-us.mp3';
const partOfSpeech = 'adjective';

describe('edge cases', () => {
  const definition = {
    definition:
      'Sagacious in adapting means to ends; circumspect in action, or in determining any line of conduct; careful, discreet, sensible; — opposed to rash; directed by prudence or wise forethought; evincing prudence',
    synonyms: [],
    antonyms: [],
  };

  test('definition has empty examples array (no example passed)', () => {
    const result = makeDefinition(definition);
    expect(result).toMatchObject({
      examples: [],
    });
  });
});

describe('sunny day scenarios', () => {
  const definition = {
    definition: 'Frugal; economical; not extravagant;',
    synonyms: ['considerate', 'provident'],
    antonyms: ['imprudent'],
    example:
      'Only prudent expenditure may provide quality within a restrictive budget',
  };

  const result = makeDefinition(
    definition,
    word,
    transcription,
    audioUrl,
    partOfSpeech
  );

  test('definition has word', () => {
    expect(result).toMatchObject({
      word,
    });
  });
  test('definition has transcription', () => {
    expect(result).toMatchObject({
      phoneticsText: transcription,
    });
  });
  test('definition has audioUrl', () => {
    expect(result).toMatchObject({
      phoneticsAudio: audioUrl,
    });
  });
  test('definition has partOfSpeech', () => {
    expect(result).toMatchObject({
      partOfSpeech,
    });
  });
  test('definition has definition', () => {
    expect(result).toMatchObject({
      definition: definition.definition,
    });
  });
  test('definition has synonyms', () => {
    expect(result).toMatchObject({
      synonyms: definition.synonyms,
    });
  });
  test('definition has antonyms', () => {
    expect(result).toMatchObject({
      antonyms: definition.antonyms,
    });
  });
  test('definition.examples is an array', () => {
    expect(result.examples).toBeInstanceOf(Array);
  });
  test('definition.examples[i] is an object with value & id fields', () => {
    expect(result.examples[0]).toHaveProperty('value');
    expect(result.examples[0]).toHaveProperty('id');
  });
  test('definition has id', () => {
    expect(result).toHaveProperty('id');
  });
});
