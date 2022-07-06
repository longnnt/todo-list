// Todo - actions

export const addTodo = () => {
  return {
    type: "addTodo",
  };
};

export const addTodoInput = (payload) => {
  return {
    type: "addTodoInput",
    payload,
  };
};
export const checkComplete = (payload) => {
  return {
    type: "checkComplete",
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: "deleteTodo",
    payload,
  };
};

export const getEditTodo = (payload) => {
  return {
    type: "getEditTodo",
    payload,
  };
};
export const editTodo = (payload) => {
  return {
    type: "editTodo",
    payload,
  };
};

export const editTodoInput = (payload) => {
  return {
    type: "editTodoInput",
    payload,
  };
};

// Filter - Actions

export const addSearchInput = (payload) => {
  return {
    type: "addSearchInput",
    payload,
  };
};

export const statusCheck = (payload) => {
  return {
    type: "statusCheck",
    payload,
  };
};
export const filterCheckbox = (payload) => {
  return {
    type: "filterCheckbox",
    payload,
  };
};
export const clearSearchInput = (payload) => {
  return {
    type: "clearSearchInput",
    payload,
  };
};
export const deleteTodoFilter = (payload) => {
  return {
    type: "deleteTodoFilter",
    payload,
  };
};
