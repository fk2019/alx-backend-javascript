interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: 'Monkey D.',
  lastName: 'Luffy',
  age: 25,
  location: 'Wano'
}
const student2: Student = {
  firstName: 'Nico',
  lastName: 'Robin',
  age: 28,
  location: 'Wano'
}
const studentsList: Student[] = [student1, student2];
const n = studentsList.map((item) => {
  const newItem = {...item}
  delete newItem.lastName;
  delete newItem.age;
  return newItem;
});
console.log(studentsList)
console.table(n);
