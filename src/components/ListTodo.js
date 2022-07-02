import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoReducer";
import ListTodoItem from "./ListTodoItem";

function ListTodo() {
  const listTodo = useSelector(selectTodoList);

  return (
    <div>
      {listTodo &&
        listTodo.map((todo, index) => (
          <ListTodoItem
            key={index}
            name={todo.name}
            id={todo.id}
            isChecked={todo.isCompleted}
          />
        ))}
    </div>
  );
}

export default ListTodo;
