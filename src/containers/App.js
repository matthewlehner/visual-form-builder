import React, { Component } from "react";
import FormBuilderContainer from "./FormBuilderContainer";

export default class App extends Component {
  render() {
    return (
      <div className="visual-form-builder">
        <header>
          <h1>FormBuilder</h1>
        </header>
        <FormBuilderContainer />
      </div>
    );
  }
}
