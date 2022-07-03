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
      let updateList = list.filter((item) =>
        item.name.toLowerCase().includes(action.payload.value.toLowerCase())
      );
      let updateMessage = state.message;
      updateMessage = "";
      let updateStatus = action.payload.status;
      if (action.payload.value === "" && state.status === "All") {
        updateList = [];
        updateStatus = false;
        updateMessage = "";
      } else if (action.payload.value === "") {
        updateList = state.filterList.filterListCheck;
        console.log(updateList);
        updateStatus = true;
        updateMessage = "";
      }
      if (updateList.length <= 0) updateMessage = "Không tìm thấy message này";
      return {
        ...state,
        search: action.payload.value,
        filterList: {
          ...state.filterList,
          filterListTodo: updateList,
          status: updateStatus,
        },
        message: updateMessage,
      };
    case "clearSearchInput":
      return {
        ...state,
        search: "",
      };
    case "statusCheck":
      const updateState = {
        ...state,
        status: action.payload,
      };
      return updateState;
    case "filterCheckbox":
      const listFilterComplete = action.payload.list;
      let checkStatus = false;
      if (state.status === "Completed") {
        checkStatus = true;
      } else if (state.status === "Incomplete") {
        checkStatus = false;
      }
      const updateListFilterComplete = listFilterComplete.filter(
        (item) => item.isCompleted === checkStatus
      );
      return {
        ...state,
        filterList: {
          ...state.filterList,
          filterListTodo: updateListFilterComplete,
          filterListCheck: updateListFilterComplete,
          status: state.status === "All" ? false : action.payload.status,
        },
        message: "",
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
