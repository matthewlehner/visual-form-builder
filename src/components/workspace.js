import React, { Component, PropTypes } from "react";
import InputTemplate from "./InputTemplate";
import InputEditForm from "./InputEditForm";

export default class Workspace extends Component {
  renderInputs(inputs) {
    return inputs.map((input, index) => {
      const edit = () => this.props.onEditInput(index);
      const remove = () => this.props.onRemoveInput(index);
      return <InputTemplate {...input} key={index} onEdit={edit} onRemove={remove}/>;
    });
  }

  renderEditForm(input, index) {
    const updateInput = (inputProps) => {
      this.props.onUpdateInput(index, inputProps);
      this.props.onStopEditInput();
    };
    const cancel = () => this.props.onStopEditInput();
    return <InputEditForm {...input} onUpdateInput={updateInput} cancel={cancel} />;
  }

  render() {
    const { inputs } = this.props;
    const { isEditing, editingIndex } = this.props.workspace;

    return (
      <div className="composed-form">
        { isEditing ?
          this.renderEditForm(inputs[editingIndex], editingIndex) :
          this.renderInputs(inputs) }
      </div>
    );
  }
}

Workspace.propTypes = {
  onStopEditInput: PropTypes.func.isRequired,
  onRemoveInput: PropTypes.func.isRequired,
  onUpdateInput: PropTypes.func.isRequired,
  onEditInput: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
  workspace: PropTypes.object.isRequired
};
