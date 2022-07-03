import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../app/store";
import "../css/FormTodo.css";
import { addSearchInput } from "../features/actions";
import { searchInputState, statusState } from "../features/filterReducer";

function SearchTodo() {
  const dispatch = useDispatch();
  const status = useSelector(statusState);
  const searchInput = useSelector(searchInputState);
  const handleSearchInput = (e) => {
    dispatch(
      addSearchInput({
        value: e.target.value,
        todoList:
          status === "All"
            ? store.getState().todo.todoList
            : store.getState().filter.filterList.filterListTodo,
        status: e.target.value === "" ? false : true,
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search todo"
        className="search-input"
        onChange={(e) => handleSearchInput(e)}
        value={searchInput}
      />
    </div>
  );
}

export default SearchTodo;
