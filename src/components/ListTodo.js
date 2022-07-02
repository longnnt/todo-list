import React, { useState } from "react";
import store from "../app/store";

function ListTodo() {
  const [listTodo] = useState(store.getState().todoList);
  console.log(store.getState().todoList);
  return (
    <div>
      {listTodo.map((todo) => (
        <div>{todo}</div>
      ))}
    </div>
  );
}

export default ListTodo;
