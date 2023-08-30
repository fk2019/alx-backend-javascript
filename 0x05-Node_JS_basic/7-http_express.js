const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  const finalResult = ['This is the list of our students'];

  countStudents(db)
    .then((result) => {
      finalResult.push(result);
      const resultText = finalResult.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', resultText.length);
      res.statusCode = 200;
      res.write(Buffer.from(resultText));
    })
    .catch((err) => {
      finalResult.push(err instanceof Error ? err.message : err.toString());
      const resultText = finalResult.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', resultText.length);
      res.statusCode = 200;
      res.write(Buffer.from(resultText));
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
