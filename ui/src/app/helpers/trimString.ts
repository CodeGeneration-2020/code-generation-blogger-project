export function trimStringByCount(str, count = 10) {
  if (str.length >= count) {
    return str.slice(0, count) + '...';
  }
  return str;
}
