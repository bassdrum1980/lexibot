import tokenizeSentence from './tokenize-sentence';

describe('sunny day scenarios', () => {
  const sentence = 'Firmly or securely fixed in place; stable.';
  const result = tokenizeSentence(sentence);

  test('the returned value is an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('the resulting array has 7 tokens', () => {
    expect(result.length).toEqual(7);
  });

  test('every token has value, id and isActive properties', () => {
    result.forEach((token) => {
      expect(token).toHaveProperty('value');
      expect(token).toHaveProperty('id');
      expect(token).toHaveProperty('isActive');
    });
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

  const wrongDataTypeSentence = null;
  const tokenizeWrongDataType = () => {
    tokenizeSentence(wrongDataTypeSentence);
  };

  test('given empty string returns empty array', () => {
    expect(emptyResult).toEqual([]);
  });

  test('given wrong dataType throws an error', () => {
    expect(tokenizeWrongDataType).toThrow();
  });
});
