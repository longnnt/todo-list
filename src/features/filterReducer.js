const initialState = {
  search: "",
  status: {},
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "addSearchInput":
      console.log(action.payload);
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}

export default filterReducer;
