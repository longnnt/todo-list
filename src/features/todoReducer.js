const inititalState = {
  todoList: JSON.parse(localStorage.getItem("listTodo")) || [],
  status: true,
  todoInput: {
    name: "",
    isCompleted: false,
  },
};
function todoReducer(state = inititalState, action) {
  switch (action.type) {
    case "addTodo":
      const upadateTodoList = [...state.todoList, state.todoInput];
      localStorage.setItem("listTodo", JSON.stringify(upadateTodoList));
      return {
        ...state,
        todoList: upadateTodoList,
      };
    case "addTodoInput":
      return {
        ...state,
        todoInput: {
          ...state.todoInput,
          id: action.id,
          name: action.payload.trim(),
        },
      };
    case "checkComplete":
      // lấy phần tử cần update checkComplete
      let todoUpdateCheck = [...state.todoList].find(
        (todo) => todo.id === action.payload
      );
      const indexOfTodoCheck = state.todoList.indexOf(todoUpdateCheck);
      todoUpdateCheck = {
        ...todoUpdateCheck,
        isCompleted: todoUpdateCheck.isCompleted ? false : true,
      };
      const updateList = [...state.todoList];
      updateList.splice(indexOfTodoCheck, 1, todoUpdateCheck);
      // up to localStorage
      localStorage.setItem("listTodo", JSON.stringify(updateList));
      return {
        ...state,
        todoList: updateList,
      };
    case "deleteTodo":
      // lay id cua todo trong todoList
      const todoDelete = [...state.todoList].find(
        (todo) => todo.id === action.payload
      );
      const indexDeleteTodo = state.todoList.indexOf(todoDelete);
      const updateListDelete = [...state.todoList];
      updateListDelete.splice(indexDeleteTodo, 1);
      // up to localStorage
      localStorage.setItem("listTodo", JSON.stringify(updateListDelete));
      return {
        ...state,
        todoList: updateListDelete,
      };
    default:
      return state;
  }
}

export const selectTodoList = (state) => state.todo.todoList;
export default todoReducer;
