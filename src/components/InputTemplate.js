import React, { Component, PropTypes } from "react";

export default class InputTemplate extends Component {
  mouseOver() {
    this.setState({ hover: true });
  }

  mouseOut() {
    this.setState({ hover: false });
  }

  render() {
    const hover = this.state && this.state.hover;
    const label = this.props.label ? <label>{this.props.label}</label> : undefined;

    return (
      <div
        className="input-wrapper"
        style={{
          background: (hover ? "green" : null)
        }}
        onMouseOver={ () => this.mouseOver() }
        onMouseOut={ () => this.mouseOut() }
      >
        {label}
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          required={this.props.required}
        />
      </div>
    );
  }
}

InputTemplate.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool
};
