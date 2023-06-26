export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const [i, v] of newArray.entries()) {
    newArray[i] = appendString + v;
  }

  return newArray;
}
