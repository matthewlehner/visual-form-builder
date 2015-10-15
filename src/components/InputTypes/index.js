import React, { Component } from "react";

export default class InputTypeList extends Component {
  render() {
    return (
      <ul className="form-building-blocks">
        <li>Text</li>
        <li>Checkbox</li>
        <li>Date</li>
        <li>Email</li>
        <li>Password</li>
        <li>Phone Number</li>
      </ul>
    );
  }
}
