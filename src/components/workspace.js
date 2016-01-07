import React, { Component, PropTypes } from "react";
import InputTemplate from "./InputTemplate";
import InputEditForm from "./InputEditForm";

export default class Workspace extends Component {
  renderInputs(inputs) {
    return inputs.map((input, index) => {
      const onEdit = () => this.props.onEditInput(index);
      return <InputTemplate {...input} key={index} onEdit={onEdit}/>;
    });
  }

  renderEditForm(input, onUpdateInput) {
    return <InputEditForm {...input} onUpdateInput={onUpdateInput} />;
  }

  render() {
    const { inputs, onUpdateInput } = this.props;
    const { isEditing, editingIndex } = this.props.workspace;

    return (
      <div className="composed-form">
        { isEditing ?
          this.renderEditForm(inputs[editingIndex], onUpdateInput) :
          this.renderInputs(inputs) }
      </div>
    );
  }
}

Workspace.propTypes = {
  onUpdateInput: PropTypes.func.isRequired,
  onEditInput: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
  workspace: PropTypes.object.isRequired
};
