import React, { Component } from "react";
import InputTemplate from "./InputTemplate";
import InputEditForm from "./InputEditForm";

export default class ComposedForm extends Component {
  render() {
    let inputs = this.props.inputs.map((input, index) => {
      return (
        <InputTemplate
          {...input}
          style={{
            cursor: "move"
          }}
          key={index} />
      );
    });

    return (
      <div className="composed-form">
        {inputs}
        <InputEditForm
          {...this.props.inputs[0]}
          onUpdateInput={this.props.onUpdateInput} />
      </div>
    );
  }
}
