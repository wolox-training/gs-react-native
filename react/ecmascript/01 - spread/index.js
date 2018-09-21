import isArray from './utils';

export function min(...numbers) {
  if (numbers.length !== 0) {
    if (isArray(numbers[0])) {
      return Math.min(...numbers[0]);
    }
    return Math.min(...numbers);
  }
  return undefined;
}

export function copy(numbers) {
  if (isArray(numbers)) {
    const arrayRetorno = [...numbers];
    return arrayRetorno;
  }
  const returnObject = { ...numbers };

  return returnObject;
}

export function reverseMerge(arraysOne, arrayTwo) {
  const arrayReturn = [...arrayTwo, ...arraysOne];
  return arrayReturn;
}

export function filterAttribs({ a, b, ...rest }) {
  return rest;
}
