import React, { Component, PropTypes } from "react";

export default class InputEditForm extends Component {
  render() {
    return (
      <form>
        <hr/>
        <header>
          <h3>Editing a {this.props.type} field</h3>
        </header>

        <label>
          Label<br/>
          <input
            type="text"
            onChange={e => this.handleChange(e)}
            value={this.props.label} />
        </label>

        <label>
          Placeholder<br/>
          <input
            type="text"
            onChange={e => this.handleChange(e)}
            value={this.props.placeholder} />
        </label>

        <label>
          Required field?<br/>
          <input
            type="checkbox"
            onChange={e => this.handleChange(e)}
            checked={this.props.required} />
        </label>
      </form>
    );
  }

  handleChange(event) {
    debugger;
  }
}

InputEditForm.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string
}
