import { combineReducers } from "redux";
import AppReducer from "./app_reducer";
import RandomReducer from "./random_reducer";

const rootReducer = combineReducers({
  astronomy: AppReducer,
  randomData: RandomReducer
});

export default rootReducer;
