export default function createEmployeesObject(departmentName, employees) {
  return Object.fromEntries([[departmentName, employees]]);
}
