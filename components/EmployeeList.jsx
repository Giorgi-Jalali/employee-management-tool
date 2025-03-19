function EmployeeList({ employees }) {
  return (
    <ul className="space-y-2 min-w-72 w-full max-w-lg">
      {employees.length ? (
        employees.map((emp, index) => (
          <li key={index} className="border p-2 rounded">
            {emp.name} - {emp.department} - {emp.role}
          </li>
        ))
      ) : (
        <li className="text-red-500">No match found</li>
      )}
    </ul>
  );
}

export default EmployeeList;
