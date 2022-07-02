import React, { useState } from "react";
import store from "../app/store";
import { addTodo } from "../features/actions";

function FormTodo() {
  const [inputTodo, setInputTodo] = useState("");
  const handleAdd = () => {
    store.dispatch(addTodo(inputTodo));
  };
  return (
    <div>
      <input type="text" onChange={(e) => setInputTodo(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default FormTodo;
