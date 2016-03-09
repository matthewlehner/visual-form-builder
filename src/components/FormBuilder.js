import React, { Component, PropTypes } from "react";

import InputTypeList from "../components/InputTypes";
import WorkspaceContainer from "../containers/workspace-container";

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
    const { onAddInput } = this.props;

    return (
      <section className="visual-form-builder__body">
        <WorkspaceContainer />
        <InputTypeList
          inputTypes={inputTypes}
          onAddInput={typeName => onAddInput(typeName)}
        />
      </section>
    );
  }
}

FormBuilder.propTypes = {
  onAddInput: PropTypes.func.isRequired
};

export default FormBuilder;
