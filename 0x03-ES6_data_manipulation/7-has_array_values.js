export default function hasValuesFromArray(set, list) {
  if (!(set instanceof Set)) throw new TypeError('set be a Set');
  if (!(list instanceof Array)) throw new TypeError('array be an array');
  return list.every((el) => set.has(el));
}
