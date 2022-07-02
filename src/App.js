import React from "react";
import FilterTodo from "./components/FilterTodo";
import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";
import SearchTodo from "./components/SearchTodo";
function App() {
  return (
    <>
      <h1>Todo App</h1>
      <SearchTodo />
      <FilterTodo />
      <ListTodo />
      <FormTodo />
    </>
  );
}

export default App;
