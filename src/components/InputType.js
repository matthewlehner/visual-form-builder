import React, { Component } from "react";

class InputType extends Component {
  render() {
    let { typeName } = this.props;

    return (
      <li style={{cursor: 'move' }}>
        {typeName}
        <button onClick={e => this.handleClick(e)}>Add</button>
      </li>
    );
  }

  handleClick(e) {
    this.props.onAddInput(this.props.typeName)
  }
}

export default InputType;
