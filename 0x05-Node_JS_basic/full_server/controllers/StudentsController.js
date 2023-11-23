const { readDatabase } = require('../utils');

const path = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path).then((data) => {
      const sdata = Object.fromEntries(Object.entries(data).sort());
      const result = [];
      result.push('This is the list of our students');
      for (const key in sdata) {
        if (Object.hasOwn(sdata, key)) result.push(`Number of students in ${key}: ${sdata[key].length}. List: ${sdata[key].join(', ')}`);
      }
      response.status(200).send(result.join('\n'));
    }).catch(() => { response.status(500).send('Cannot load the database'); });
  }

  static getAllStudentsByMajor(request, response) {
    const params = ['CS', 'SWE'];
    const par = request.params.major;
    if (!params.includes(par)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path).then((data) => {
      if (Object.keys(data).length > 0) {
        const result = `List: ${data[par].join(', ')}`;
        response.status(200).send(result);
      }
    }).catch(() => { response.status(500).send('h Cannot load the database'); });
  }
}
module.exports = StudentsController;
