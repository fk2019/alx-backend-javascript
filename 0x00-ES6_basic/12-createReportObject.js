export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return reportObj;
}
