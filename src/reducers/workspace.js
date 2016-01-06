import { EDIT_ITEM } from "../actions/workspace";

const initialState = {
  editing: false
};

export default function workspace(state = initialState, action) {
  switch (action.type) {
    case EDIT_ITEM:
      return Object.assign({}, state, { editing: action.itemIndex });
    default:
      return state;
  }
}
