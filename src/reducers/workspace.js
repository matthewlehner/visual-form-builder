import { EDIT_ITEM } from "../actions/workspace";

export default function workspace(state, action) {
  switch (action.type) {
    case EDIT_ITEM:
      return Object.assign({}, state, { editing: action.itemIndex });
    default:
      return state;
  }
}
