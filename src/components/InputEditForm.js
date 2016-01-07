import React, { Component, PropTypes } from "react";

export default class InputEditForm extends Component {
  componentWillMount() {
    const { label, placeholder, required } = this.props;
    this.setState({ label, placeholder, required });
  }

  render() {
    const { type } = this.props;
    const { label, placeholder, required } = this.state;

    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <hr/>
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
    this.props.cancel();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onUpdateInput(this.state);
  }
}

InputEditForm.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onUpdateInput: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
};
