import React, { Component } from "react";
import FormBuilder from "../components/FormBuilder";

export default class App extends Component {
  render() {
    return (
      <div className="visual-form-builder">
        <header>
          <h1>FormBuilder</h1>
        </header>
        <FormBuilder />
      </div>
    );
  }
}
