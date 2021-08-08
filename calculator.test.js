const calculator = require('./calculator');

test('adds two numbers', () => {
  expect(calculator.add(2, 7)).toBe(9);
});

test('adds two floats', () => {
  expect(calculator.add(3.4, 6.1)).toBe(9.5);
});

test('subtracts float from integer', () => {
  expect(calculator.subtract(5, 7.2)).toBe(-2.2);
});

test('multipies two numbers', () => {
  expect(calculator.multiply(2.2, 2.5)).toBe(5.5);
});

test('divides two numbers', () => {
  expect(calculator.divide(4.2, 2)).toBe(2.1);
});