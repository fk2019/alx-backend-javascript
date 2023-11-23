const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

const db = process.argv[2] !== undefined ? process.argv[2] : '';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  let result = 'This is the list of our students\n';

  countStudents(db)
    .then((data) => {
      result += data;
      res.send(result);
    })
    .catch((err) => {
      result += err.message;
      res.send(result);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
export default app;
