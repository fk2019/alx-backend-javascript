const fs = require('fs');

exports.readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      reject(error);
      return;
    }
    let lines = data.split('\n');
    lines = lines.filter((line) => line.length > 0);
    const header = lines[0].split(',');
    header.splice(1, header.length - 2);
    const students = {};
    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      values.splice(1, values.length - 2);
      const [firstname, field] = values;
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    }
    resolve(students);
  });
});
