import React, { Component, PropTypes } from "react";

export default class InputType extends Component {
  render() {
    const { typeName, connectDragSource } = this.props;

    return connectDragSource(
      <li>
        {typeName}
      </li>
    );
  }
}

InputType.propTypes = {
  typeName: PropTypes.string.isRequired
};
