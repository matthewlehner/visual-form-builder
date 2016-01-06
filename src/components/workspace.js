import React, { Component, PropTypes } from "react";
import InputTemplate from "./InputTemplate";
import InputEditForm from "./InputEditForm";

export default class Workspace extends Component {
  render() {
    const { inputs, onUpdateInput } = this.props;
    const inputComponents = inputs.map((input, index) => {
      return <InputTemplate {...input} style={{ cursor: "move" }} key={index}/>;
    });

    return (
      <div className="composed-form">
        {inputComponents}
        <InputEditForm {...inputs[0]} onUpdateInput={onUpdateInput} />
      </div>
    );
  }
}

Workspace.propTypes = {
  onUpdateInput: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired
};
