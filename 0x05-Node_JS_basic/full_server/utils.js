const fs = require('fs');

export default function readDatabase(path) {
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
      const result = [];
      for (const [field, names] of Object.entries(count)) {
        result.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      resolve(result.join('\n'));
    });
  });
}
module.exports = readDatabase;
