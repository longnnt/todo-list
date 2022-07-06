import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: JSON.parse(localStorage.getItem("listTodo")) || [],
  status: true,
  todoInput: {
    name: "",
    isCompleted: false,
  },
  editTodo: "",
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoInput: (state, action) => {
      state.todoInput = {
        ...state.todoInput,
        id: action.payload.id,
        name: action.payload.value.trim(),
        edit: false,
      };
    },
    addTodo: (state) => {
      state.todoList.push(state.todoInput);
      localStorage.setItem("listTodo", JSON.stringify(state.todoList));
    },
    checkComplete: (state, action) => {
      // lấy phần tử cần update checkComplete
      let todoUpdateCheck = state.todoList.find(
        (todo) => todo.id === action.payload
      );
      const indexOfTodoCheck = state.todoList.indexOf(todoUpdateCheck);
      todoUpdateCheck = {
        ...todoUpdateCheck,
        isCompleted: todoUpdateCheck.isCompleted ? false : true,
      };
      state.todoList.splice(indexOfTodoCheck, 1, todoUpdateCheck);
      // up to localStorage
      localStorage.setItem("listTodo", JSON.stringify(state.todoList));
    },
    deleteTodo: (state, action) => {
      const todoDelete = state.todoList.find(
        (todo) => todo.id === action.payload
      );
      const indexOfTodoDelete = state.todoList.indexOf(todoDelete);
      state.todoList.splice(indexOfTodoDelete, 1);
      localStorage.setItem("listTodo", JSON.stringify(state.todoList));
    },
    editTodoInput: (state, action) => {
      state.editTodo = action.payload;
    },
    editTodo: (state, action) => {
      let todoEdit = state.todoList.find(
        (todo) => todo.id === action.payload.id
      );
      const indexOfTodoEdit = state.todoList.indexOf(todoEdit);
      // Button close edit
      if (action.payload.close) {
        todoEdit = {
          ...todoEdit,
          edit: action.payload.status,
        };
        state.todoList.splice(indexOfTodoEdit, 1, todoEdit);
      }
      const valueInEditTodoInput =
        (action.payload.editTodoInput !== "" && action.payload.editTodoInput) ||
        todoEdit.name;
      todoEdit = {
        ...todoEdit,
        name: valueInEditTodoInput,
        edit: action.payload.status,
      };
      state.todoList.splice(indexOfTodoEdit, 1, todoEdit);
      localStorage.setItem("listTodo", JSON.stringify(state.todoList));
    },
  },
});

export const {
  addTodo,
  addTodoInput,
  checkComplete,
  deleteTodo,
  editTodoInput,
  editTodo,
} = todoSlice.actions;
export const selectTodoList = (state) => state.todo.todoList;
export const editTodoState = (state) => state.todo.editTodo;
export default todoSlice.reducer;
