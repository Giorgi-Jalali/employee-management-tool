"use client";

import { useCallback, useEffect, useState } from "react";

import EmployeeForm from "@/components/EmployeeForm";
import EmployeeList from "@/components/EmployeeList";
import SearchAndFilter from "@/components/SearchAndFilter";
import filterEmployees from "@/utils/filterEmployees";
import sortEmployees from "@/utils/sortEmployees";

export default function EmployeeManagementApp() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
    role: "",
  });
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const storedData = localStorage.getItem("employees");
      if (storedData) {
        setEmployees(JSON.parse(storedData));
      } else {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setEmployees(jsonData);
        localStorage.setItem("employees", JSON.stringify(jsonData));
      }
    };
    loadData();
  }, []);

  const handleAddEmployee = useCallback(() => {
    if (!newEmployee.name || !newEmployee.department || !newEmployee.role) {
      alert("Name, department or role cannot be empty!");
      return;
    }
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setNewEmployee({ name: "", department: "", role: "" });
  }, [employees, newEmployee]);

  const handleSort = useCallback(() => setIsSorted((prev) => !prev), []);

  const filteredEmployees = filterEmployees(employees, search, department);
  const displayedEmployees = isSorted
    ? sortEmployees(filteredEmployees)
    : filteredEmployees;

  return (
    <div className="p-4 space-y-4 flex flex-col items-center">
      <h1 className="text-xl font-bold mt-4 mb-8">Employee Management Tool</h1>
      <SearchAndFilter
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        isSorted={isSorted}
        handleSort={handleSort}
      />
      <EmployeeForm
        newEmployee={newEmployee}
        setNewEmployee={setNewEmployee}
        handleAddEmployee={handleAddEmployee}
      />
      <h2 className="text-lg font-bold mt-4 mb-2">Employee List</h2>
      <EmployeeList employees={displayedEmployees} />
    </div>
  );
}
