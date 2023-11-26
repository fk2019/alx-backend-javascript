interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "francis",
  lastName: "kamau",
  age: 12,
  location: "kenya"
};

const student2: Student = {
  firstName: "luffy",
  lastName: "D.",
  age: 20,
  location: "wano"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
 const row = document.createElement("tr");

 const firstNameCell = document.createElement("td");
 firstNameCell.textContent = student.firstName;
 row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
