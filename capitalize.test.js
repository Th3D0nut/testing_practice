const capitalize = require('./capitalize');

test('returns a word with the first letter capitalized', () => {
  expect(capitalize('tomorrow')).toBe('Tomorrow');
});

test('empty returns empty', () => {
  expect(capitalize('')).toBe('');
});

test('works with a sentence', () => {
  expect(capitalize('the hero went to poop.')).toBe('The hero went to poop.');
});

test('works with a fully capitalized sentence except the first character', () => {
  expect(capitalize('tHERE ARE MANY CROCODILES.')).toBe(
    'THERE ARE MANY CROCODILES.');
});