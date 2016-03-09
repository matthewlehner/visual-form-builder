import React, { Component, PropTypes } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import Sortable from "./sortable";
import InputTemplate from "./InputTemplate";

class FormContent extends Component {
  render() {
    const { inputs } = this.props;

    const inputComponents = inputs.map((input, index) => {
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

    const styles = {
      display: this.props.isEditing ? "none" : ""
    };

    return (
      <section className="form-content" style={styles}>
        <h4>Content <small>Drag to Sort</small></h4>
        {inputComponents}
      </section>
    );
  }
}

FormContent.propTypes = {
  inputs: PropTypes.array.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onEditInput: PropTypes.func.isRequired,
  onReorderInputs: PropTypes.func.isRequired,
  onRemoveInput: PropTypes.func.isRequired
};

export default DragDropContext(HTML5Backend)(FormContent);
