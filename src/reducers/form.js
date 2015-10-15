import { ADD_INPUT, REMOVE_INPUT } from "../actions/form";

export default function form(state = {}, action) {
  switch (action.type) {
  case ADD_INPUT:
    return Object.assign({}, state);

  case REMOVE_INPUT:
    return Object.assign({}, state);

  default:
    return state;
  }
}
