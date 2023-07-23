export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) throw new TypeError('set must be a set');
  if (typeof startString !== 'string');
  if (!startString || !startString.length) return '';
  let arr = [];
  set.forEach((el) => {
    if (el.startsWith(startString) === true) arr.push(el.slice(startString.length));
  });
  return arr.join('-');
}
