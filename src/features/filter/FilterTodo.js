import React from "react";
import Checkbox from "../../components/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchInput, filterCheckbox, statusCheck } from "./filterSlice";
import { selectTodoList } from "../todo/todoSlice";
import "./FilterTodo.css";

function FilterTodo() {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);

  const handleCheck = (title) => {
    dispatch(clearSearchInput());
    dispatch(statusCheck(title));
    dispatch(
      filterCheckbox({
        todoList,
        status: true,
      })
    );
  };

  return (
    <div className="filter-todo">
      <Checkbox title="All" onHandleChecked={handleCheck} />
      <Checkbox title="Completed" onHandleChecked={handleCheck} />
      <Checkbox title="Incomplete" onHandleChecked={handleCheck} />
    </div>
  );
}

export default FilterTodo;
