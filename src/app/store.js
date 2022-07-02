import { combineReducers, createStore } from "redux";
import filterReducer from "../features/filterReducer";
import todoReducer from "../features/todoReducer";

const store = createStore(
  combineReducers({
    todo: todoReducer,
    filter: filterReducer,
  })
);

export default store;
