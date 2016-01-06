export const EDIT_ITEM = "EDIT_ITEM";

export function setEditing(itemIndex) {
  return { type: EDIT_ITEM, itemIndex };
}
