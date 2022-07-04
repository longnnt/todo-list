import React from "react";
import FilterTodo from "./components/FilterTodo";
import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";
import SearchTodo from "./components/SearchTodo";
import "./css/App.css";
function App() {
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
