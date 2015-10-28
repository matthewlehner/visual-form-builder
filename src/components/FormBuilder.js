import React, { Component } from "react";
import InputTypeList from "components/InputTypes";
import ComposedForm from "components/ComposedForm";

const inputTypes = [
  "Text",
  "Checkbox",
  "Date",
  "Email",
  "Password",
  "Phone Number"
]

export default class FormBuilder extends Component {
  render() {
    return (
      <div className="visual-form-builder">
        <header>
          <h1>I'm a FormBuilder!</h1>
        </header>
        <section className="visual-form-builder__body">
          <ComposedForm />
          <InputTypeList inputTypes={inputTypes} />
        </section>
      </div>
    );
  }
}
