export default function getStudentsByLocation(list, city) {
  if (!(list instanceof Array)) throw new TypeError('List must be an array of objects');
  if (typeof city !== 'string') throw new TypeError('city must be a string');
  return list.filter((obj) => obj.location === city);
}
