export default function handleResponseFromAPI(promise) {
  const objct = { status: 200, body: 'Success' };
  return promise
    .then(() => objct)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
