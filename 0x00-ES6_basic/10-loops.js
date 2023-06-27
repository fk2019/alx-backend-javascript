export default function appendToEachArrayValue(array, appendString) {
  const items = [];
  for (const item of array) {
    items.push(appendString + item);
  }

  return items;
}
