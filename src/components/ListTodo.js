import React from "react";
import { useSelector } from "react-redux";
import {
  filterListState,
  filterListStatusState,
  messageState,
} from "../features/filterReducer";
import { selectTodoList } from "../features/todoReducer";
import ListTodoItem from "./ListTodoItem";
import "../css/ListTodo.css";

function ListTodo() {
  const listTodo = useSelector(selectTodoList);
  const filterList = useSelector(filterListState);
  const filterStatus = useSelector(filterListStatusState);
  const messageFilter = useSelector(messageState);
  const listOrFilter = () => {
    if (filterStatus === true) {
      return filterList;
    } else {
      return listTodo;
    }
  };
  return (
    <div className="list-todo">
      {listOrFilter().map((todo, index) => (
        <ListTodoItem
          key={index}
          name={todo.name}
          id={todo.id}
          isChecked={todo.isCompleted}
          edit={todo.edit}
        />
      ))}
      {messageFilter && filterStatus && <span>{messageFilter}</span>}
    </div>
  );
}

export default ListTodo;
