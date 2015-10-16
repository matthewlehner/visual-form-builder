import React, { Component } from "react";
import InputTemplate from "./InputTemplate";

export default class ComposedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [{
        type: "text",
        label: "Name",
        required: true,
        placeholder: "Enter your name"
      }, {
        type: "email",
        label: "Email",
        required: true,
        placeholder: "Your email address, please"
      }, {
        type: "tel",
        placeholder: "Telephone Number!"
      }, {
        type: "checkbox",
        label: "You can contact me by email"
      }, {
        type: "submit",
        value: "Send me!"
      }]
    };
  }

  render() {
    let inputs = this.state.inputs.map((input) => {
      return <InputTemplate {...input} />
    });

    return (
      <div className="composed-form">
        {inputs}
      </div>
    );
  }
}
