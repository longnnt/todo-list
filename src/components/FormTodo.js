import React, { useRef } from "react";
import store from "../app/store";
import { addTodo, addTodoInput } from "../features/actions";
import { v4 as uuidv4 } from "uuid";
import "../css/FormTodo.css";

function FormTodo() {
  const inputRef = useRef();
  const handleAdd = () => {
    if (!/^$/.test(inputRef.current.value)) {
      inputRef.current.value = "";
      inputRef.current.focus();
      store.dispatch(addTodo());
    }
  };

  const handleInput = (e) => {
    store.dispatch(addTodoInput(e.target.value, uuidv4()));
  };
  return (
    <div>
      <input
        className="form-input"
        type="text"
        onChange={(e) => handleInput(e)}
        placeholder="Add todo"
        ref={inputRef}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default FormTodo;
