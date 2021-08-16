import { combineReducers } from "redux";
import apiData from "./apiData";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  apiData: apiData,
});

export default allReducers;
