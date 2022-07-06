const inititalState = {
  todoList: JSON.parse(localStorage.getItem("listTodo")) || [],
  status: true,
  todoInput: {
    name: "",
    isCompleted: false,
  },
  editTodo: "",
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
          id: action.payload.id,
          name: action.payload.value.trim(),
          edit: false,
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
    case "editTodo":
      // console.log(action.payload.editTodoInputString);
      const coppyTodoList = [...state.todoList];
      let updateEditTodo = coppyTodoList.find(
        (todo) => todo.id === action.payload.id
      );
      console.log(updateEditTodo);
      const indexOfEditTodo = coppyTodoList.indexOf(updateEditTodo);
      if (action.payload.close) {
        updateEditTodo = {
          ...updateEditTodo,
          name: { ...updateEditTodo }.name,
          edit: action.payload.status,
        };
        coppyTodoList.splice(indexOfEditTodo, 1, updateEditTodo);

        localStorage.setItem("listTodo", JSON.stringify(coppyTodoList));
        return {
          ...state,
          todoList: coppyTodoList,
        };
      }
      updateEditTodo = {
        ...updateEditTodo,
        name:
          (!/^$/.test(action.payload.editTodoInputString) &&
            action.payload.editTodoInputString) ||
          updateEditTodo.name,
        edit: action.payload.status,
      };
      coppyTodoList.splice(indexOfEditTodo, 1, updateEditTodo);
      // update len localStorage
      localStorage.setItem("listTodo", JSON.stringify(coppyTodoList));
      return {
        ...state,
        todoList: coppyTodoList,
      };
    case "editTodoInput":
      return {
        ...state,
        editTodo: action.payload,
      };
    default:
      return state;
  }
}

export const selectTodoList = (state) => state.todo.todoList;
export const editTodoState = (state) => state.todo.editTodo;
export default todoReducer;
