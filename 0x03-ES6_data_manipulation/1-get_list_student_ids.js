export default function getListStudentsIds(list) {
  if (!(list instanceof Array)) return [];
  const ids = list.map((obj) => obj.id);
  return ids;
}
