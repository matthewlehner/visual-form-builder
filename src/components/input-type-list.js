import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import InputType from "./input-type";
import { addInput } from "../actions/form";

const inputTypes = [
  "Text",
  "Checkbox",
  "Date",
  "Email",
  "Password",
  "Phone Number",
  "Birthday"
];

class InputTypeList extends Component {
  constructor(props) {
    super(props);
    this.state = { isAdding: false };
  }

  openTools() {
    if (!this.state.isAdding) {
      this.setState({ isAdding: true });
    }
  }

  closeTools() {
    if (this.state.isAdding) {
      this.setState({ isAdding: false });
    }
  }

  render() {
    const { onClick } = this.props;
    const inputComponents = inputTypes.map(typeName => {
      const handleClick = () => {
        onClick(typeName);
        this.closeTools();
      };
      return (
        <InputType key={typeName} typeName={typeName} onClick={handleClick} />
      );
    });

    const hiddenUnlessAdding = this.state.isAdding ? {} : { display: "none" };
    const closeButton = (
      <div onClick={() => this.closeTools()} style={hiddenUnlessAdding} className="close-button">
        &times;
      </div>
    );
    const inputList = (
      <ul style={hiddenUnlessAdding}>
        {inputComponents}
      </ul>
    );

    return (
      <div className="form-building-blocks">
        <h4 onClick={() => this.openTools()}>Add Form Content</h4>
        {closeButton}
        {inputList}
      </div>
    );
  }
}

InputTypeList.propTypes = {
  inputTypes: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ),
  onClick: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    onClick: (typeName) => dispatch(addInput(typeName))
  };
}

export default connect(
  undefined,
  mapDispatchToProps
)(InputTypeList);
