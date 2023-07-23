export default function getStudentIdsSum(list) {
  if (!(list instanceof Array)) throw new TypeError('List must be an array');
  return list.map((obj) => obj.id).reduce((val, acc) => val + acc);
}
