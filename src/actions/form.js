export const ADD_INPUT = "ADD_INPUT";
export const REMOVE_INPUT = "REMOVE_INPUT";
export const UPDATE_INPUT = "UPDATE_INPUT";

export function addInput(inputType) {
  return {
    type: ADD_INPUT,
    inputType
  };
}

export function removeInput(index) {
  return {
    type: REMOVE_INPUT,
    index
  };
}

export function updateInput(index, inputProperties) {
  return {
    type: UPDATE_INPUT,
    index,
    inputProperties
  };
}
