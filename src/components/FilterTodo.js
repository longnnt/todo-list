import React from "react";
import Checkbox from "./Checkbox";
import "../css/FilterTodo.css";
import { useDispatch } from "react-redux";
import {
  clearSearchInput,
  filterCheckbox,
  statusCheck,
} from "../features/actions";
import store from "../app/store";

function FilterTodo() {
  const dispatch = useDispatch();

  const handleCheck = (title) => {
    dispatch(clearSearchInput());
    dispatch(statusCheck(title));
    dispatch(
      filterCheckbox({
        list: store.getState().todo.todoList,
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
