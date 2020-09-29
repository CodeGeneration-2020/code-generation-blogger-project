export const reduceNumber = (num, unit = false) => {
  const stringNum = String(num);
  const numLengt = stringNum.length;

  if (numLengt === 4) {
    if (unit) return { value: stringNum.slice(0, 1), unit: 'k' };
    return `${stringNum.slice(0, 1)}k`;
  }

  if (numLengt === 5) {
    if (unit) return { value: stringNum.slice(0, 2), unit: 'kk' };
    return `${stringNum.slice(0, 2)}kk`;
  }

  if (numLengt === 6) {
    if (unit) return { value: stringNum.slice(0, 3), unit: 'kk' };
    return `${stringNum.slice(0, 3)}kk`;
  }

  if (numLengt === 7) {
    if (unit) return { value: stringNum.slice(0, 1), unit: 'm' };
    return `${stringNum.slice(0, 1)}m`;
  }

  if (numLengt === 8) {
    if (unit) return { value: stringNum.slice(0, 2), unit: 'm' };
    return `${stringNum.slice(0, 2)}m`;
  }

  return num;
};
