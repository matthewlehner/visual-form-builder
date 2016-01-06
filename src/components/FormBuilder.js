import React, { Component, PropTypes } from "react";
import InputTypeList from "components/InputTypes";
import ComposedForm from "components/ComposedForm";

const inputTypes = [
  "Text",
  "Checkbox",
  "Date",
  "Email",
  "Password",
  "Phone Number",
  "Birthday"
];

export default class FormBuilder extends Component {
  render() {
    const { form, onAddInput, onUpdateInput } = this.props;

    return (
      <section className="visual-form-builder__body">
        <ComposedForm
          inputs={form}
          onUpdateInput={(index, inputProperties) => onUpdateInput(index, inputProperties)}/>
        <InputTypeList
          inputTypes={inputTypes}
          onAddInput={typeName => onAddInput(typeName)} />
      </section>
    );
  }
}

FormBuilder.propTypes = {
  form: PropTypes.array.isRequired,
  onAddInput: PropTypes.func.isRequired,
  onUpdateInput: PropTypes.func.isRequired
};
