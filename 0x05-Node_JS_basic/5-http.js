const fs = require('fs');
const http = require('http');

const port = 1245;
const host = 'localhost';

const db = process.argv[2] !== undefined ? process.argv[2] : '';
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n');
      const header = lines[0].split(',');
      const students = [];
      for (let i = 1; i < lines.length; i += 1) {
        const values = lines[i].split(',');
        if (values.length === header.length) {
          const student = {};
          for (let j = 0; j < header.length; j += 1) {
            student[header[j]] = values[j];
          }
          students.push(student);
        }
      }
      const count = {};
      students.forEach((student) => {
        const {
          firstname, lastname, age, field,
        } = student;
        if (firstname && lastname && age && field) {
          if (!count[field]) {
            count[field] = [];
          }
          count[field].push(firstname);
        }
      });
      let totalStudents = 0;
      Object.values(count).forEach((names) => {
        totalStudents += names.length;
      });
      const result = [`Number of students: ${totalStudents}`];
      for (const [field, names] of Object.entries(count)) {
        result.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      resolve(result.join('\n'));
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const result = await countStudents(db);
      res.end(`This is the list of our students\n${result}`);
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
