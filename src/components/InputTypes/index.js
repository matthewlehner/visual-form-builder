import React, { Component, PropTypes } from "react";
import InputType from '../InputType';

export default class InputTypeList extends Component {
  render() {
    let inputComponents = this.props.inputTypes.map( function (typeName) {
      return (
        <InputType key={typeName} typeName={typeName} />
      );
    });

    return (
      <ul className="form-building-blocks">
        {inputComponents}
      </ul>
    );
  }
}

InputTypeList.propTypes = {
  inputTypes: PropTypes.arrayOf(
    PropTypes.string.isRequired
  )
}
