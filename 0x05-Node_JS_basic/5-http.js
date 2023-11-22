const fs = require('fs');
const http = require('http');
const countStudents = require('./3-read_file_async');
const port = 1245;
const host = 'localhost';

const db = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let result = 'This is the list of our students\n';
    await countStudents(db)
      .then((data) => {
        result += data;
        console.log(data);
        res.end(result);
      })
      .catch((error) => {
        result += error.message;
        res.end(result);
      });
  }
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
module.exports = app;
