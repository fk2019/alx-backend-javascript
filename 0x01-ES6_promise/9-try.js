export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];
  try {
    queue.unshift(mathFunction());
  } catch (e) {
    queue.unshift(`Error: ${e.message}`);
  }
  return queue;
}
