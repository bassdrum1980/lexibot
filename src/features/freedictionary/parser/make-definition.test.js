import makeDefinition from './make-definition';

// TODO: update tests after make definition's outer code has migrated to TS
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

  test('definition.synonyms is an array', () => {
    expect(result.synonyms).toBeInstanceOf(Array);
  });
  test('definition.synonyms[i] is an object with value & id fields', () => {
    expect(result.synonyms[0]).toHaveProperty('value');
    expect(result.synonyms[0]).toHaveProperty('id');
  });

  test('definition.antonyms is an array', () => {
    expect(result.antonyms).toBeInstanceOf(Array);
  });

  test('definition.antonyms[i] is an object with value & id fields', () => {
    expect(result.antonyms[0]).toHaveProperty('value');
    expect(result.antonyms[0]).toHaveProperty('id');
  });

  test('definition has id', () => {
    expect(result).toHaveProperty('id');
  });

  test('definition.examples is an array', () => {
    expect(result.examples).toBeInstanceOf(Array);
  });

  test('every example is an object with value & id fields', () => {
    result.examples.forEach((example) => {
      expect(example).toHaveProperty('value');
      expect(example).toHaveProperty('id');
    });
  });

  test("example's value is an array of tokens", () => {
    expect(result.examples[0].value).toBeInstanceOf(Array);
  });

  test("every example's token has value, id and isActive properties", () => {
    result.examples[0].value.forEach((token) => {
      expect(token).toHaveProperty('value');
      expect(token).toHaveProperty('id');
      expect(token).toHaveProperty('isActive');
    });
  });
});
