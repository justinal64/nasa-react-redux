export default (state = {}, action) => {
  switch (action.type) {
    case "RANDOM_DATA":
      console.log("RANDOM_DATA from reducer");
      const anotherState = Object.assign(
        {},
        ...state,
        action.payload.data.results
      );
      console.log({ anotherState });
      return anotherState;
    default:
      return state;
  }
};
