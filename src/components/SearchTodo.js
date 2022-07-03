import React from "react";
import { useDispatch } from "react-redux";
import store from "../app/store";
import "../css/FormTodo.css";
import { addSearchInput } from "../features/actions";

function SearchTodo() {
  const dispatch = useDispatch();
  const handleSearchInput = (e) => {
    dispatch(
      addSearchInput({
        value: e.target.value,
        todoList: store.getState().todo.todoList,
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
      />
    </div>
  );
}

export default SearchTodo;
