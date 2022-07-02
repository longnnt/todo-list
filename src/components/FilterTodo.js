import React from "react";
import Checkbox from "./Checkbox";
import "../css/FilterTodo.css";

function FilterTodo() {
  const handleCheckAll = () => {};
  const handleCheckComplete = () => {};
  const handleCheckNotComplete = () => {};
  return (
    <div className="filter-todo">
      <Checkbox title="All" onHandleChecked={handleCheckAll} />
      <Checkbox title="Completed" onHandleChecked={handleCheckComplete} />
      <Checkbox
        title="Not Completed"
        onHandleChecked={handleCheckNotComplete}
      />
    </div>
  );
}

export default FilterTodo;
