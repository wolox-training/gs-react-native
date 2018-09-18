import isArray from './utils';

export function min(...numbers) {
  if (numbers.length !== 0) {
    if (isArray(numbers[0])) {
      return Math.min(...numbers[0]);
    }
    if (numbers.length === 1) {
      return Math.min(numbers);
    }
    const array = [];
    for (let i = 0; i < numbers.length; i++) {
      array.push(numbers[i]);
    }
    return Math.min(...array);
  }
  return undefined;
}

export function copy() {}
