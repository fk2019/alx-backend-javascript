const fs = require('fs');

const handleStudents = (students) => {
  const studentCount = {};
  students.forEach((student) => {
    const { firstName, lastName, age, field } = student;
    if (firstName && lastName && age && field) {
      if (!studentCount[field]) studentCount[field] = [];
    }
    studentCount[field].push(firstName);
  });
  let totalStudents = 0;
  Object.values(studentCount).forEach((names) => {
    totalStudents += names.length;
  });
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, names] of Object.entries(studentCount)) {
    const out = `Number of students in ${field}: ${names.length}.`;
    const end = ` List: ${names.join(', ')}`;
    console.log(out + end);
  }
};

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const header = lines[0].split(',');
    const students = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length === header.length) {
        const student = {};
        for (let j = 0; j < header.length; j++) {
          student[header[j]] = values[j];
        }
        students.push(student);
      }
    }
    handleStudents(students);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
