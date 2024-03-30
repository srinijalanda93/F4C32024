const initialState = {
  data: null,
  loading: false,
};
const reducer = (state = initialState, action) => {
  if (action.type == "FETCH_DATA") {
    return { ...state, data: action.payload };
  } else if (action.type == "LOADING") {
    return { ...state, loading: action.payload };
  } else if (action.type == "NOT_LOADING") {
    return { ...state, loading: action.payload };
  }
  return state;
};
export default reducer;

// This is the final code
