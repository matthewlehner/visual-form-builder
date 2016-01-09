import React, { Component, PropTypes } from "react";

import Sortable from "./sortable";
import InputTemplate from "./InputTemplate";
import InputEditForm from "./InputEditForm";

class Workspace extends Component {
  renderInputs(inputs) {
    return inputs.map((input, index) => {
      const inputProps = Object.assign({
        index,
        onEdit: () => this.props.onEditInput(index),
        onRemove: () => this.props.onRemoveInput(index)
      }, input);

      const moveInput = (i, nextIndex) => this.props.onReorderInputs(i, nextIndex);

      return (
        <Sortable key={input.id} index={index} id={input.id} moveInput={moveInput}>
          <InputTemplate {...inputProps}/>
        </Sortable>
      );
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
  onReorderInputs: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
  workspace: PropTypes.object.isRequired
};

export default Workspace;
