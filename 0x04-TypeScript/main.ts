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
const n = [...studentsList].map((item) => {
  delete item.lastName;
  delete item.age;
  return item;
});
console.table(n);
