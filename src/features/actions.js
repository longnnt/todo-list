// Todo - actions

export const addTodo = () => {
  return {
    type: "addTodo",
  };
};

export const addTodoInput = (payload, id) => {
  return {
    type: "addTodoInput",
    payload,
    id,
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

// Filter - Actions

export const addSearchInput = (payload) => {
  return {
    type: "addSearchInput",
    payload,
  };
};

export const checkCompleteFilter = (payload) => {
  return {
    type: "checkCompleteFilter",
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
