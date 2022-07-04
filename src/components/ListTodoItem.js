import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkComplete,
  deleteTodo,
  deleteTodoFilter,
  editTodo,
  editTodoInput,
} from "../features/actions";
import {
  MdCancelPresentation,
  MdDeleteForever,
  MdEditOff,
} from "react-icons/md";

import "../css/ListTodoItem.css";
import Checkbox from "./Checkbox";
import { editTodoState } from "../features/todoReducer";

function ListTodoItem({ name, isChecked, id, edit }) {
  const dispatch = useDispatch();
  const editTodoInputString = useSelector(editTodoState);
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
    dispatch(deleteTodoFilter(id));
  };
  const handleChecked = () => {
    dispatch(checkComplete(id));
  };
  const handleEdit = (status) => {
    dispatch(
      editTodo({
        id,
        status,
      })
    );
    dispatch(editTodoInput(name));
  };
  const handleEditTodo = (e) => {
    dispatch(editTodoInput(e.target.value));
  };
  const handleSubmitTodoInput = (id, status) => {
    if (!/^$/.test(editTodoInputString.trim()))
      dispatch(
        editTodo({
          id,
          editTodoInputString,
          status,
        })
      );
  };
  const handleCloseTodoInput = (id, status) => {
    dispatch(
      editTodo({
        id,
        status,
        close: !status,
      })
    );
  };
  return (
    <div className={`list__todo-item ${isChecked ? "checked" : "not-checked"}`}>
      <Checkbox isChecked={isChecked} onHandleChecked={handleChecked} />
      {!edit ? (
        <>
          <span
            className="list__todo-item-name"
            onDoubleClick={() => handleEdit(true)}
          >
            {name}
          </span>
          <button onClick={() => handleDeleteTodo(id)}>
            <MdDeleteForever className="btn-delete" />
          </button>
        </>
      ) : (
        <div>
          <input
            className="input-todo-edit"
            type="text"
            value={editTodoInputString}
            onChange={(e) => handleEditTodo(e)}
          />
          <button
            onClick={() => handleSubmitTodoInput(id, false)}
            className="btn-edit"
          >
            <MdEditOff />
          </button>
          <button
            onClick={() => handleCloseTodoInput(id, false)}
            className="btn-close"
          >
            <MdCancelPresentation />
          </button>
        </div>
      )}
    </div>
  );
}

export default ListTodoItem;
