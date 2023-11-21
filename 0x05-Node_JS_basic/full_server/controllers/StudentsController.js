import readDatabase from '../utils';

const MAJORS = ['CS', 'SWE'];

class StudentController {
  static getAllStudents(request, response) {
    const db = process.argv[2] !== undefined ? process.argv[2] : '';
    readDatabase(db)
      .then((result) => {
        const resList = ['This is the list of our students'];
        const comp = (a, b) => a.localeCompare(b);
        resList.push(result.sort(comp));
      })
      .catch((err) => {
        response.status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const db = process.argv[2] !== undefined ? process.argv[2] : '';
    const { major } = request.params;
    if (!MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(db)
      .then((studentGroups) => {
        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}
