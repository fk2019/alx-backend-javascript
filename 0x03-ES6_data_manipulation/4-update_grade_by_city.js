export default function updateStudentGradeByCity(list, city, newGrades) {
  if (!(list instanceof Array)) throw new TypeError('List must be an array');
  if (typeof city !== 'string') throw new TypeError('City must be a string');
  if (!(newGrades instanceof Array)) throw new TypeError('newGrades must be an array');
  const filteredList = list.filter((obj) => obj.location === city);
  const result = filteredList.map((student) => {
    const grades = newGrades.filter((grades) => grades.studentId === student.id);
    const grade = grades.map((e) => e.grade)[0] || 'N/A';
    return { ...student, grade };
  });
  return result;
}
