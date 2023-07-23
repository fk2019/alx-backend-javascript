export default function setFromArray(list) {
  if (!(list instanceof Array)) throw new TypeError('argument must be an array');
  return new Set(list);
}
