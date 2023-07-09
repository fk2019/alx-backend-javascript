export default function guardrail(mathFunction) {
  const arr = ['Guardrial was processed'];
  try {
    arr.unshift(mathFunction());
    return arr;
  } catch (e) {
    arr.unshift(`Error: ${e.message}`);
    return arr;
  }
}
