function EmployeeForm({ newEmployee, setNewEmployee, handleAddEmployee }) {
  return (
    <div className="w-72 flex-col items-center max-w-2xs md:flex-row md:justify-center md:max-w-3xl md:w-fit">
      <h2 className="text-lg font-bold mb-2 mt-4 text-center">
        Add New Employee
      </h2>
      <div className="flex gap-2 flex-col items-center max-w-2xs md:flex-row md:max-w-3xl">
        {["name", "department", "role"].map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={newEmployee[field]}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, [field]: e.target.value })
            }
            className="border p-2 rounded  w-full md:w-auto"
          />
        ))}
        <button
          onClick={handleAddEmployee}
          className="bg-blue-500 text-white py-2 px-12 rounded md:px-4 cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default EmployeeForm;
