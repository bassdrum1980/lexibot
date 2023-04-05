import addIdToEntities from './add-id-to-entities';

describe('basic tests', () => {
  const values = ['a', 'b', 'c', '', 'd'];
  const result = addIdToEntities(values);

  test('expected result is an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('the resulting array has 4 tokens', () => {
    expect(result.length).toEqual(4);
  });

  test('every token has value and id properties', () => {
    result.forEach((token) => {
      expect(token).toHaveProperty('value');
      expect(token).toHaveProperty('id');
    });
  });
});
