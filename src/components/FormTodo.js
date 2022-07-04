import React, { useRef } from "react";
import { addTodo, addTodoInput } from "../features/actions";
import { v4 as uuidv4 } from "uuid";
import "../css/FormTodo.css";
import { useDispatch } from "react-redux";
import { MdAddTask } from "react-icons/md";

function FormTodo() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleAdd = () => {
    if (!/^$/.test(inputRef.current.value)) {
      inputRef.current.value = "";
      inputRef.current.focus();
      dispatch(addTodo());
    } else {
      window.alert("Vui lòng nhập todo...");
    }
  };

  const handleInput = (e) => {
    dispatch(addTodoInput(e.target.value, uuidv4()));
  };
  return (
    <div className="form-todo">
      <input
        className="form-input"
        type="text"
        onChange={(e) => handleInput(e)}
        placeholder="Add todo...."
        ref={inputRef}
      />
      <button onClick={handleAdd} className="btn-add">
        <MdAddTask />
      </button>
    </div>
  );
}

export default FormTodo;
