import tokenizeSentence from './tokenize-sentence';

describe('sunny day scenarios', () => {
  const sentence = 'Firmly or securely fixed in place; stable.';
  const result = tokenizeSentence(sentence);

  test('the resulting array has 7 tokens', () => {
    expect(result.length).toEqual(7);
  });

  test('every token has isActive: true by default', () => {
    result.forEach((token) => {
      expect(token.isActive).toBe(true);
    });
  });
});

describe('edge cases', () => {
  const emptySentence = '';
  const emptyResult = tokenizeSentence(emptySentence);

  test('given empty string returns empty array', () => {
    expect(emptyResult).toEqual([]);
  });

  const sentenceWithOnlySpaces = '   ';
  const resultWithOnlySpaces = tokenizeSentence(sentenceWithOnlySpaces);

  test('given string with only spaces returns empty array', () => {
    expect(resultWithOnlySpaces).toEqual([]);
  });

  const sentenceWithDoubleSpacings = '  test  test  ';
  const resultWithDoubleSpacings = tokenizeSentence(sentenceWithDoubleSpacings);

  test('given string with double spacings returns array with 2 tokens', () => {
    expect(resultWithDoubleSpacings.length).toEqual(2);
  });
});
