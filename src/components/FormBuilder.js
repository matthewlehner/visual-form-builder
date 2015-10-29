import React, { Component } from "react";
import { connect } from "react-redux";
import { addInput, updateInput } from "../actions/form";
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
]

class FormBuilder extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, form } = this.props;

    return (
      <section className="visual-form-builder__body">
        <ComposedForm
          inputs={form}
          onUpdateInput={( index, inputProperties ) =>
            dispatch(updateInput(index, inputProperties))}/>
        <InputTypeList
          inputTypes={inputTypes}
          onAddInput={typeName =>
            dispatch(addInput(typeName))
          } />
      </section>
    );
  }
}

function select(state) {
  return {
    form: state.form
  }
}

export default connect(select)(FormBuilder);
