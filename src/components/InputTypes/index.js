import React, { Component, PropTypes } from "react";
import InputType from "../InputType";

export default class InputTypeList extends Component {
  render() {
    const { inputTypes, onAddInput } = this.props;
    const inputComponents = inputTypes.map(typeName => {
      const onClick = () => onAddInput(typeName);
      return (
        <InputType key={typeName} typeName={typeName} onClick={onClick} />
      );
    });

    return (
      <div className="form-building-blocks">
        <h3>Single inputs</h3>
        <ul>
          {inputComponents}
        </ul>
        {/* <h3>Group Inputs</h3> */}
        {/* <ul> */}
        {/*   <InputType key="firstAndLastName" typeName="First Name/Last Name" /> */}
        {/* </ul> */}
      </div>
    );
  }
}

InputTypeList.propTypes = {
  inputTypes: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ),
  onAddInput: PropTypes.func.isRequired
};
