const initialState = {
  search: "",
  status: "All",
  filterList: {
    filterListTodo: [],
    status: "false",
  },
  message: "",
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "addSearchInput":
      const list = action.payload.todoList;
      let updateList = list.filter((item) =>
        item.name.toLowerCase().includes(action.payload.value.toLowerCase())
      );
      let updateMessage = state.message;
      updateMessage = "";
      let updateStatus = action.payload.status;
      if (action.payload.value === "") {
        updateList = [];
        updateStatus = false;
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
    case "checkCompleteFilter":
      return state;
    default:
      return state;
  }
}

export const filterListState = (state) =>
  state.filter.filterList.filterListTodo;
export const filterListStatusState = (state) => state.filter.filterList.status;
export const statusState = (state) => state.filter.status;
export const messageState = (state) => state.filter.message;
export default filterReducer;
