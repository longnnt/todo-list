import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./FormTodo.css";
import { useDispatch } from "react-redux";
import { MdAddTask } from "react-icons/md";
import { addTodo, addTodoInput } from "./todoSlice";

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
    dispatch(addTodoInput({ value: e.target.value, id: uuidv4() }));
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
