import React, { Component, PropTypes } from "react";

import Sortable from "./sortable";
import InputTemplate from "./InputTemplate";

export default class FormContent extends Component {
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

    return (
      <section className="form-content">
        <h4>Content <small>Drag to Sort</small></h4>
        {inputComponents}
      </section>
    );
  }
}

FormContent.propTypes = {
  inputs: PropTypes.array.isRequired
}
