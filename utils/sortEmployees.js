const sortEmployees = (employees) =>
  [...employees].sort((a, b) => a.name.localeCompare(b.name));

export default sortEmployees;
