import { ADD_INPUT, REMOVE_INPUT, UPDATE_INPUT, REORDER_INPUTS } from "../actions/form";

const defaultState = [{
  type: "text",
  label: "Name",
  required: true,
  placeholder: "Enter your name"
}, {
  type: "email",
  label: "Email",
  required: true,
  placeholder: "Your email address, please"
}, {
  type: "tel",
  placeholder: "Telephone Number!"
}, {
  type: "checkbox",
  label: "You can contact me by email"
}, {
  type: "submit",
  value: "Send me!"
}];

export default function form(state = defaultState, action) {
  switch (action.type) {
    case ADD_INPUT:
      return [...state, {
        type: action.inputType,
        label: action.inputType,
        placeholder: `new ${action.inputType}`,
      }];

    case REMOVE_INPUT:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case UPDATE_INPUT:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], action.inputProperties),
        ...state.slice(action.index + 1)
      ];
    case REORDER_INPUTS:
      const item = state[action.currentIndex];
      const nextState = [
        ...state.slice(0, action.currentIndex),
        ...state.slice(action.currentIndex + 1)
      ];
      nextState.splice(action.nextIndex, 0, item);
      return nextState;
    default:
      return state;
  }
}
