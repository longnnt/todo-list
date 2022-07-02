const inititalState = {
  todoList: [],
  filter: {
    search: "",
  },
};
function rootReducer(state = inititalState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const updateTodo = [...state.todoList, action.payload];
      return {
        ...state,
        todoList: updateTodo,
      };
    default:
      return state;
  }
}

export default rootReducer;
