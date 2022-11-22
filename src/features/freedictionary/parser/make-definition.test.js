import makeDefinition from './make-definition';

const data = {
  synonyms: [],
  antonyms: [],
};

test('examples is always array', () => {
  expect(makeDefinition(data)).toHaveProperty('examples', []);
});
