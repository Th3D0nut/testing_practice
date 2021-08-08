function average(numbers) {
  const sum = numbers.reduce((a, b) => {
    return a + b;
  });
  return sum / (numbers.length);
}

function min(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  return min;
}

function max(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
}

function analyze(numbers) {
  return {
    average: average(numbers),
    min: min(numbers),
    max: max(numbers),
    length: numbers.length,
  }
}

console.log(analyze([1, 2, 3, 4]));

module.exports = analyze;