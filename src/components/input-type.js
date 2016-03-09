import React, { Component, PropTypes } from "react";

export default class InputType extends Component {
  render() {
    const { typeName } = this.props;

    return (
      <li onClick={() => this.props.onClick()}>
        {typeName}
      </li>
    );
  }
}

InputType.propTypes = {
  onClick: PropTypes.func.isRequired,
  typeName: PropTypes.string.isRequired
};
