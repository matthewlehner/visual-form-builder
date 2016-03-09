import React, { Component, PropTypes } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import FormContentContainer from "../containers/form-content";
import Sortable from "./sortable";
import InputEditForm from "./InputEditForm";

class Workspace extends Component {
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
        <FormContentContainer />
        { isEditing ?
          this.renderEditForm(inputs[editingIndex], editingIndex) :
          null }
      </div>
    );
  }
}

Workspace.propTypes = {
  onStopEditInput: PropTypes.func.isRequired,
  onUpdateInput: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
  workspace: PropTypes.object.isRequired
};

export default DragDropContext(HTML5Backend)(Workspace);
