export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const newState = Object.assign({}, ...state, action.payload.data);
      return newState;
    case "TEST":
      console.log("test from reducer");
      return state;
    default:
      return state;
  }
};
