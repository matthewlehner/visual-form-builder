import { expect } from "chai";
import reducer from "../../src/reducers/form";
import { ADD_INPUT, UPDATE_INPUT, REMOVE_INPUT, REORDER_INPUTS } from "../../src/actions/form";

describe("form reducer", () => {
  it("handles ADD_INPUT", () => {
    const initialState = [];
    const action = {
      type: ADD_INPUT,
      inputType: "text"
    };

    const nextState = reducer(initialState, action);

    expect(nextState[0].type).to.equal("text");
    expect(nextState[0].label).to.equal("text");
    expect(nextState[0].placeholder).to.equal("new text");
  });

  it("handles UPDATE_INPUT", () => {
    const initialState = [{
      type: "text",
      label: "Name",
      required: true,
      placeholder: "Enter your name"
    }];

    const action = {
      type: UPDATE_INPUT,
      index: 0,
      inputProperties: {
        placeholder: "Nickname",
        required: false
      }
    };

    const nextState = reducer(initialState, action);

    expect(nextState[0].placeholder).to.equal("Nickname");
    expect(nextState[0].required).to.equal(false);
    expect(nextState[0].label).to.equal("Name");
    expect(nextState[0].type).to.equal("text");
  });

  it("handles REMOVE_INPUT", () => {
    const initialState = [{
      type: "text",
      label: "Name",
      required: true,
      placeholder: "Enter your name"
    }];
    const action = { type: REMOVE_INPUT, index: 0 };
    const nextState = reducer(initialState, action);

    expect(nextState.length).to.equal(0);
  });

  it("handles REORDER_ITEMS", () => {
    const initialState = [{ name: "item1" }, { name: "item2" }, { name: "item3" }];
    const action = {
      type: REORDER_INPUTS,
      currentIndex: 0,
      nextIndex: 1
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.eql(
      [{ name: "item2" }, { name: "item1" }, { name: "item3" }]
    );
  });
});
