import React, { Component } from "react";

export default class InputTypeList extends Component {
  render() {
    let inputTypes = this.props.inputTypes.map( function (typeName) {
      return (
        <li key={typeName}
            style={{
              cursor: 'move'
            }}>
          {typeName}
        </li>
      );
    });

    return (
      <ul className="form-building-blocks">
        {inputTypes}
      </ul>
    );
  }
}
