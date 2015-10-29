import React, { Component } from "react";

class InputType extends Component {
  render() {
    let { typeName } = this.props;

    return (
      <li style={{ cursor: 'move' }}>
        {typeName}
      </li>
    );
  }
}

export default InputType;
