import React, { Component, PropTypes } from "react";

import FormContentContainer from "../containers/form-content";
import InputEditFormContainer from "../containers/input-edit-form";
import InputTypeList from "./input-type-list";

export default class FormBuilder extends Component {
  render() {
    const { isEditing } = this.props;

    return (
      <section className="visual-form-builder__body">
        { isEditing ?
          <InputEditFormContainer /> :
          <div>
            <FormContentContainer />
            <InputTypeList />
          </div> }
      </section>
    );
  }
}

export default FormBuilder;
