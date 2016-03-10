export const ADD_INPUT = "ADD_INPUT";
export const REMOVE_INPUT = "REMOVE_INPUT";
export const UPDATE_INPUT = "UPDATE_INPUT";
export const REORDER_INPUTS = "REORDER_INPUTS";
export const REPLACE_INPUTS = "REPLACE_INPUTS";

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

export function reorderInputs(currentIndex, nextIndex) {
  return {
    type: REORDER_INPUTS,
    currentIndex,
    nextIndex
  };
}

export function replaceInputs(formData) {
  return {
    type: REPLACE_INPUTS,
    formData
  };
}
