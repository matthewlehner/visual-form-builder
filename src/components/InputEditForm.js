import React, { Component, PropTypes } from "react";

export default class InputEditForm extends Component {
  componentWillMount() {
    const { label, placeholder, required } = this.props.input;
    this.setState({ label, placeholder, required });
  }

  render() {
    const { type } = this.props.input;
    const { label, placeholder, required } = this.state;

    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <header>
          <h3>Editing a {type} field</h3>
        </header>

        <label>
          Label<br/>
          <input
            type="text"
            onChange={e => this.handleChange(e, "label")}
            value={label}
          />
        </label>

        <label>
          Placeholder<br/>
          <input
            type="text"
            onChange={e => this.handleChange(e, "placeholder")}
            value={placeholder}
          />
        </label>

        <label>
          Required field?<br/>
          <input
            type="checkbox"
            onChange={e => this.handleChange(e, "required")}
            checked={required}
          />
        </label>

        <button>Save</button>
        <button onClick={(e) => this.handleCancel(e) }>Cancel</button>
      </form>
    );
  }

  handleChange(event, stateAttribute) {
    const nextState = {};
    nextState[stateAttribute] = event.target.value;
    this.setState(nextState);
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.onCancel();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.inputIndex, this.state);
  }
}

InputEditForm.propTypes = {
  input: PropTypes.object.isRequired,
  inputIndex: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};
