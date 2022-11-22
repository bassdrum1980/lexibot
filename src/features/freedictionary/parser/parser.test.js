import parser from './parser';

test('first test', () => {
  expect(parser([])).toStrictEqual([]);
});
