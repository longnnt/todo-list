const initialState = {
  search: "",
  status: "All",
  filterList: {
    filterListTodo: [],
    status: "false",
    filterListCheck: [],
  },
  message: "",
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "addSearchInput":
      const list =
        state.status === "All"
          ? action.payload.todoList
          : state.filterList.filterListCheck;
      let updatedList = list.filter((item) =>
        item.name.toLowerCase().includes(action.payload.value.toLowerCase())
      );
      let updatedMessage = state.message;
      updatedMessage = "";
      let updatedStatus = action.payload.status;
      if (action.payload.value === "" && state.status === "All") {
        updatedList = [];
        updatedStatus = false;
        updatedMessage = "";
      } else if (action.payload.value === "") {
        updatedList = state.filterList.filterListCheck;
        updatedStatus = true;
        updatedMessage = "";
      }
      if (updatedList.length <= 0)
        updatedMessage = "Không tìm thấy message này";
      return {
        ...state,
        search: action.payload.value,
        filterList: {
          ...state.filterList,
          filterListTodo: updatedList,
          status: updatedStatus,
        },
        message: updatedMessage,
      };
    case "clearSearchInput":
      return {
        ...state,
        search: "",
      };
    case "statusCheck":
      const updatedState = {
        ...state,
        status: action.payload,
      };
      return updatedState;
    case "filterCheckbox":
      const listFilterComplete = action.payload.list;
      let checkStatus = false;
      if (state.status === "Completed") {
        checkStatus = true;
      } else if (state.status === "Incomplete") {
        checkStatus = false;
      }
      const updatedListFilterComplete = listFilterComplete.filter(
        (item) => item.isCompleted === checkStatus
      );
      return {
        ...state,
        filterList: {
          ...state.filterList,
          filterListTodo: updatedListFilterComplete,
          filterListCheck: updatedListFilterComplete,
          status: state.status === "All" ? false : action.payload.status,
        },
        message: "",
      };
    case "deleteTodoFilter":
      const copyFilterListTodo = [...state.filterList.filterListTodo];
      const updatedListDeleteTodo = copyFilterListTodo.find(
        (todo) => todo.id === action.payload
      );
      const indexOfDeleteTodoFilter = copyFilterListTodo.indexOf(
        updatedListDeleteTodo
      );
      copyFilterListTodo.splice(indexOfDeleteTodoFilter, 1);
      return {
        ...state,
        filterList: {
          ...state.filterList,
          filterListTodo: copyFilterListTodo,
        },
      };
    default:
      return state;
  }
}

export const searchInputState = (state) => state.filter.search;
export const filterListState = (state) =>
  state.filter.filterList.filterListTodo;
export const filterListStatusState = (state) => state.filter.filterList.status;
export const filterStatusState = (state) => state.filter.filterList.status;
export const statusState = (state) => state.filter.status;
export const messageState = (state) => state.filter.message;
export default filterReducer;
