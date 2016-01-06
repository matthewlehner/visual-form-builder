import React, { Component, PropTypes } from "react";

export default class InputType extends Component {
  render() {
    const { typeName } = this.props;

    return (
      <li style={{ cursor: "move" }}>
        {typeName}
        <button onClick={() => this.handleClick()}>Add</button>
      </li>
    );
  }

  handleClick() {
    this.props.onAddInput(this.props.typeName);
  }
}

InputType.propTypes = {
  typeName: PropTypes.string.isRequired,
  onAddInput: PropTypes.func.isRequired
};
