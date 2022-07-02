import React from "react";
import { useDispatch } from "react-redux";
import "../css/FormTodo.css";
import { addSearchInput } from "../features/actions";

function SearchTodo() {
  const dispatch = useDispatch();
  const handleSearchInput = (e) => {
    dispatch(addSearchInput(e.target.value));
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
