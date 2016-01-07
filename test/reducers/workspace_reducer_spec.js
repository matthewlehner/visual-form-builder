import { expect } from "chai";
import reducer from "../../src/reducers/workspace";
import { EDIT_ITEM } from "../../src/actions/workspace";

describe("workspace reducer", () => {
  it("handles EDIT_ITEM", () => {
    const initialState = {};
    const action = {
      type: EDIT_ITEM,
      itemIndex: 1
    };

    const nextState = reducer(initialState, action);

    expect(nextState.isEditing).to.equal(true);
    expect(nextState.editingIndex).to.equal(1);
  });
});
