export const ADD_INPUT = "ADD_INPUT";
export const REMOVE_INPUT = "REMOVE_INPUT";

export function add() {
  return {
    type: ADD_INPUT
  };
}

export function remove() {
  return {
    type: REMOVE_INPUT
  };
}
