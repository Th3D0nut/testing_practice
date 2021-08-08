const analyze = require('./array_analysis');

test('returns average, min, max and length', () => {
  expect(analyze([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});