export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const newState = Object.assign({}, ...state, action.payload.data);
      return newState;
    case "TEST":
      console.log("test from reducer");
      return state;
    case "ANOTHER_TEST":
      console.log("another_test from reducer");
      console.log(action.payload.data.results);
    // const anotherState = Object.assign({}, ...state, action.payload.data);
    // return anotherState;
    default:
      return state;
  }
};
