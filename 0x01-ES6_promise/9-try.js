export default function guardrail(mathFunction) {
  const queue = ['Guardrial was processed'];
  try {
    queue.unshift(mathFunction());
    return queue;
  } catch (e) {
    queue.unshift(`Error: ${e.message}`);
    return queue;
  }
}
