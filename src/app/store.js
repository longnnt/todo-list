import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import todoReducer from "../features/todo/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer,
  },
});

export default store;
