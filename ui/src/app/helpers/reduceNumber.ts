export const reduceNumber = (num: number): { value: number; unit: string } => {
  const stringNum = String(num);
  const numLengt = stringNum.length;

  if (numLengt === 4) {
    return { value: Number(stringNum.slice(0, 1)), unit: 'k' };
  }

  if (numLengt === 5) {
    return { value: Number(stringNum.slice(0, 2)), unit: 'k' };
  }

  if (numLengt === 6) {
    return { value: Number(stringNum.slice(0, 3)), unit: 'k' };
  }

  if (numLengt === 7) {
    return { value: Number(stringNum.slice(0, 1)), unit: 'kk' };
  }

  if (numLengt === 8) {
    return { value: Number(stringNum.slice(0, 2)), unit: 'kk' };
  }

  return { value: num, unit: '' };
};
