export default function createIteratorObject(report) {
  let employees = [].concat(...[report.allEmployees].map((dept) => Object.values(dept)));
  employees = [].concat(...employees);
  return employees;
}
