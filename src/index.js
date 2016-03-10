import React from "react";
import { render } from "react-dom";
import Root from "./containers/root";
import configureStore from "./store/configure-store";
import { addIdsArrayOfObjects, removeIdsFromArrayOfObjects } from "./helpers";
import { replaceInputs } from "./actions/form";

function selectForm(state) {
  return state.form;
}

let store;
let currentValue;

const FormBuilder = {
  render(rootEl) {
    render(
      <Root store={store} />,
      rootEl
    );
  },

  setInitialState(formState) {
    const formStateForStore = addIdsArrayOfObjects(formState);
    store = configureStore({
      form: formStateForStore
    });
  },

  setState(formState) {
    const formStateForStore = addIdsArrayOfObjects(formState);
    store.dispatch(replaceInputs(formStateForStore));
  },

  subscribe(listener) {
    function handleChange() {
      const previousValue = currentValue;
      currentValue = selectForm(store.getState());

      if (previousValue !== currentValue) {
        const sanitizedFormData = removeIdsFromArrayOfObjects(currentValue);
        listener(sanitizedFormData);
      }
    }

    return store.subscribe(handleChange);
  }
};

window.FormBuilder = FormBuilder;
