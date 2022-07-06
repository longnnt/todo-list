import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  filterList: {
    filterListTodo: [],
    status: "false",
    filterListCheck: [],
  },
  message: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    search: (state, action) => {
      const todoList =
        state.status === "All"
          ? action.payload.todoList
          : state.filterList.filterListCheck;
      let listFilter = todoList.filter((todo) =>
        todo.name.toLowerCase().includes(action.payload.value.toLowerCase())
      );
      let updatedMessage = state.message;
      updatedMessage = "";
      let updatedStatus = action.payload.status;
      if (action.payload.value === "" && state.status === "All") {
        listFilter = [];
        updatedStatus = false;
      } else if (action.payload.value === "") {
        listFilter = state.filterList.filterListCheck;
        updatedStatus = true;
      }
      if (listFilter.length <= 0) updatedMessage = "Không tìm thấy todo này";
      state.search = action.payload.value;
      state.filterList.filterListTodo = listFilter;
      state.filterList.status = updatedStatus;
      state.message = updatedMessage;
    },
    clearSearchInput: (state) => {
      state.search = "";
    },
    statusCheck: (state, action) => {
      state.status = action.payload;
    },
    filterCheckbox: (state, action) => {
      const listFilterComplete = action.payload.todoList;
      let checkStatus = false;
      if (state.status === "Completed") {
        checkStatus = true;
      } else if (state.status === "Incomplete") {
        checkStatus = false;
      }

      const updatedListFilterComplete = listFilterComplete.filter(
        (todo) => todo.isCompleted === checkStatus
      );

      const updatedStatus =
        state.status === "All" ? false : action.payload.status;
      if (updatedListFilterComplete.length <= 0 && checkStatus) {
        state.message = "Không có todo nào đã hoàn thành";
      } else if (updatedListFilterComplete.length <= 0 && !checkStatus) {
        state.message = "Không có todo nào chưa hoàn thành";
      } else {
        state.message = "";
      }
      state.filterList.filterListTodo = updatedListFilterComplete;
      state.filterList.filterListCheck = updatedListFilterComplete;
      state.filterList.status = updatedStatus;
    },
    deleteTodoFilter: (state, action) => {
      const deleteTodoFilter = state.filterList.filterListTodo.find(
        (todo) => todo.id === action.payload
      );
      const indexOfDeleteTodoFilter =
        state.filterList.filterListTodo.indexOf(deleteTodoFilter);
      state.filterList.filterListTodo.splice(indexOfDeleteTodoFilter, 1);
    },
  },
});

export const {
  search,
  clearSearchInput,
  statusCheck,
  filterCheckbox,
  deleteTodoFilter,
} = filterSlice.actions;

export const searchInputState = (state) => state.filter.search;
export const filterListState = (state) =>
  state.filter.filterList.filterListTodo;
export const filterListStatusState = (state) => state.filter.filterList.status;
export const filterStatusState = (state) => state.filter.filterList.status;
export const statusState = (state) => state.filter.status;
export const messageState = (state) => state.filter.message;

export default filterSlice.reducer;
