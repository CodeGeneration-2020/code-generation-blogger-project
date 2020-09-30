export const reduceNumber = num => {
  const stringNum = String(num);
  const numLengt = stringNum.length;

  if (numLengt === 4) {
    return `${stringNum.slice(0, 1)}k`;
  }

  if (numLengt === 5) {
    return `${stringNum.slice(0, 2)}kk`;
  }

  if (numLengt === 6) {
    return `${stringNum.slice(0, 3)}kk`;
  }

  if (numLengt === 7) {
    return `${stringNum.slice(0, 1)}m`;
  }

  if (numLengt === 8) {
    return `${stringNum.slice(0, 2)}m`;
  }

  return num;
};
