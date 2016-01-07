import React, { Component, PropTypes } from "react";

export default class InputType extends Component {
  render() {
    const { typeName, onAddInput } = this.props;

    return (
      <li style={{ cursor: "move" }}>
        {typeName}
        <button onClick={() => onAddInput(typeName)}>Add</button>
      </li>
    );
  }
}

InputType.propTypes = {
  typeName: PropTypes.string.isRequired,
  onAddInput: PropTypes.func.isRequired
};
