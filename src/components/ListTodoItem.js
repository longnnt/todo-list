import React from "react";
import { useDispatch } from "react-redux";
import { checkComplete, deleteTodo } from "../features/actions";
import "../css/ListTodoItem.css";
import Checkbox from "./Checkbox";

function ListTodoItem({ name, isChecked, id }) {
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  const handleChecked = () => {
    dispatch(checkComplete(id));
  };
  return (
    <div className={`list__todo-item ${isChecked ? "checked" : "not-checked"}`}>
      <Checkbox isChecked={isChecked} onHandleChecked={handleChecked} />
      <span className="list__todo-item-name">{name}</span>
      <button onClick={() => handleDeleteTodo(id)}>&times;</button>
    </div>
  );
}

export default ListTodoItem;
