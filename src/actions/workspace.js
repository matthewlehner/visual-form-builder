export const EDIT_ITEM = "EDIT_ITEM";
export const STOP_EDIT_ITEM = "STOP_EDIT_ITEM";

export function setEditing(itemIndex) {
  return { type: EDIT_ITEM, itemIndex };
}

export function stopEditing() {
  return { type: STOP_EDIT_ITEM };
}
