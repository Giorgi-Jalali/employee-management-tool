function SearchAndFilter({
  search,
  setSearch,
  department,
  setDepartment,
  isSorted,
  handleSort,
}) {
  return (
    <div className="w-72 flex gap-2 flex-col items-center max-w-2xs md:flex-row md:max-w-xl md:w-fit">
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full md:w-auto"
      />
      <input
        type="text"
        placeholder="Filter by department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="border p-2 rounded w-full  md:w-auto"
      />
      <button
        onClick={handleSort}
        className="bg-green-500 text-white max-w-48 py-2 px-8 md:p-2 rounded cursor-pointer"
      >
        {isSorted ? "Unsort" : "Sort by Name"}
      </button>
    </div>
  );
}

export default SearchAndFilter;
