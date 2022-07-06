import { combineReducers, createStore, applyMiddleware } from "redux";
import filterReducer from "../features/filterReducer";
import todoReducer from "../features/todoReducer";
import { loggerMiddleware } from "../middleware/logger";

const middlewareEnhancer = applyMiddleware(loggerMiddleware);

const store = createStore(
  combineReducers({
    todo: todoReducer,
    filter: filterReducer,
  }),
  middlewareEnhancer
);

export default store;
