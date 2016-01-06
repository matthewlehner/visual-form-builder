import { combineReducers } from "redux";
import form from "./form";
import workspace from "./workspace";

const rootReducer = combineReducers({
  form,
  workspace
});

export default rootReducer;
