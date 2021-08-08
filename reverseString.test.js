const reverseString = require('./reverseString');

test('reverses word', () => {
  expect(reverseString('geometry')).toBe('yrtemoeg');
});

test('reverses sentence', () => {
  expect(reverseString('I have never seen a cow.'))
  .toBe('.woc a nees reven evah I');
});