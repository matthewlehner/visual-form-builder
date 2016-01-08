import React, { Component, PropTypes } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import InputTemplate from "./InputTemplate";
import InputEditForm from "./InputEditForm";

class Workspace extends Component {
  renderInputs(inputs) {
    return inputs.map((input, index) => {
      const props = input;
      props.onEdit = () => this.props.onEditInput(index);
      props.onRemove = () => this.props.onRemoveInput(index);
      props.onReorderInputs = (index, nextIndex) => this.props.onReorderInputs(index, nextIndex);
      props.index = index;

      return <InputTemplate {...props} key={index} />;
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

export default DragDropContext(HTML5Backend)(Workspace);
