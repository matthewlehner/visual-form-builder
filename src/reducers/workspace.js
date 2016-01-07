import { EDIT_ITEM } from "../actions/workspace";

const initialState = {
  isEditing: false
};

export default function workspace(state = initialState, action) {
  switch (action.type) {
    case EDIT_ITEM:
      return Object.assign({}, state, {
        isEditing: true,
        editingIndex: action.itemIndex
      });
    default:
      return state;
  }
}
