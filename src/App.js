import React from "react";
import FilterTodo from "./features/filter/FilterTodo";
import FormTodo from "./features/todo/FormTodo";
import ListTodo from "./components/ListTodo";
import SearchTodo from "./features/todo/SearchTodo";
import { useSelector } from "react-redux";
import "./css/App.css";
function App() {
  const counterState = useSelector((state) => state);
  console.log(counterState);
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 className="title-app">Todo App</h1>
          <SearchTodo />
        </div>
        <FilterTodo />
        <ListTodo />
        <FormTodo />
      </div>
    </div>
  );
}

export default App;
