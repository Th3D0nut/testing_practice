const caesar = require('./caesar');

test('moves all letters 5 to the right in the alphabet', () => {
  expect(caesar('cars are funny', 5)).toBe('hfwx fwj kzssd');
});

test('moves all letters 5 to the left in the alphabet', () => {
  expect(caesar('cars are funny', -5)).toBe('xvmn vmz apiit');
});

test('Still works with punctuation and capitals', () => {
  expect(caesar('Cars are funny.', 5)).toBe('Hfwx fwj kzssd.');
});

test('Wraps!', () => {
  expect(caesar('Cars are funny.', 26)).toBe('Cars are funny.');
});

test('Wraps with a ridiculous number', () => {
  expect(caesar('Cars are funny.', 132)).toBe('Ectu ctg hwppa.');
});