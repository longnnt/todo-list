import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoFilter,
  filterListState,
  filterListStatusState,
  messageState,
} from "../features/filter/filterSlice";
import {
  checkComplete,
  deleteTodo,
  editTodo,
  editTodoInput,
  selectTodoList,
} from "../features/todo/todoSlice";
import ListTodoItem from "./ListTodoItem";
import "../css/ListTodo.css";

function ListTodo() {
  const dispatch = useDispatch();
  const listTodo = useSelector(selectTodoList);
  const filterList = useSelector(filterListState);
  const filterStatus = useSelector(filterListStatusState);
  const messageFilter = useSelector(messageState);
  const listTodoOrListFilter = filterStatus === true ? filterList : listTodo;

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    dispatch(deleteTodoFilter(id));
  };
  const handleChecked = (id) => {
    dispatch(checkComplete(id));
  };
  const handleEdit = (id, status, nameTodo) => {
    dispatch(
      editTodo({
        id,
        status,
      })
    );
    dispatch(editTodoInput(nameTodo));
  };
  const handleEditTodo = (event) => {
    dispatch(editTodoInput(event.target.value));
  };

  const handleSubmitTodoEdit = (id, status, editTodoInput) => {
    if (editTodoInput.trim() !== "") {
      dispatch(
        editTodo({
          id,
          editTodoInput,
          status,
        })
      );
    }
  };
  const handleCloseTodoEdit = (id, status, close) => {
    // close is true, form edit close
    dispatch(
      editTodo({
        id,
        status,
        close,
      })
    );
  };
  return (
    <div className="list-todo">
      {listTodoOrListFilter.map((todo, index) => (
        <ListTodoItem
          key={index}
          name={todo.name}
          id={todo.id}
          isChecked={todo.isCompleted}
          edit={todo.edit}
          onDeleteTodo={handleDeleteTodo}
          onChecked={handleChecked}
          onEdit={handleEdit}
          onEditTodo={handleEditTodo}
          onSubmitTodoEdit={handleSubmitTodoEdit}
          onCloseTodoEdit={handleCloseTodoEdit}
        />
      ))}
      {messageFilter && filterStatus && <span>{messageFilter}</span>}
    </div>
  );
}

export default ListTodo;
