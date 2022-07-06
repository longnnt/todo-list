import React from "react";
import { useSelector } from "react-redux";

import {
  MdCancelPresentation,
  MdDeleteForever,
  MdEditOff,
} from "react-icons/md";

import "../css/ListTodoItem.css";
import Checkbox from "./Checkbox";
import { editTodoState } from "../features/todo/todoSlice";

function ListTodoItem({
  name,
  isChecked,
  id,
  edit,
  onDeleteTodo,
  onChecked,
  onEditTodo,
  onEdit,
  onSubmitTodoEdit,
  onCloseTodoEdit,
}) {
  const editTodoInputString = useSelector(editTodoState);

  return (
    <div className={`list__todo-item ${isChecked ? "checked" : "not-checked"}`}>
      <Checkbox isChecked={isChecked} onHandleChecked={() => onChecked(id)} />
      {!edit ? (
        <>
          <span
            className="list__todo-item-name"
            onDoubleClick={() => onEdit(id, true, name)}
          >
            {name}
          </span>
          <button onClick={() => onDeleteTodo(id)}>
            <MdDeleteForever className="btn-delete" />
          </button>
        </>
      ) : (
        <div>
          <input
            className="input-todo-edit"
            type="text"
            value={editTodoInputString}
            onChange={(e) => onEditTodo(e)}
          />
          <button
            onClick={() => onSubmitTodoEdit(id, false, editTodoInputString)}
            className="btn-edit"
          >
            <MdEditOff />
          </button>
          <button
            onClick={() => onCloseTodoEdit(id, false, true)}
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
