export function addQuery(filter) {
  if (filter) {
    return JSON.stringify(parseArrOfObjects(filter));
  } else {
    return '';
  }
}

const parseArrOfObjects = filter => {
  const isObject = typeof filter[0] === 'object';
  return isObject ? filter.map(e => e.value) : filter;
};
