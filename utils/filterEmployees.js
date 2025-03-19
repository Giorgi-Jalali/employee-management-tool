const filterEmployees = (employees, search, department) => {
  return employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) &&
      (department === "" ||
        emp.department.toLowerCase().includes(department.toLowerCase()))
  );
};

export default filterEmployees;
