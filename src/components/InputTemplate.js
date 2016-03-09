import React, { Component, PropTypes } from "react";

class InputTemplate extends Component {
  render() {
    const label = this.props.label ? <label>{this.props.label}</label> : undefined;
    const { type, onEdit, onRemove } = this.props;
    const className = `input-wrapper ${type}`;

    return (
      <div className={className}>
        <div className="input-type">Type:<br/>{type}</div>
        <div className="input-label">{label}</div>
        <button
          onClick={onEdit}
          className="edit-btn"
        >Edit</button>
        <button
          onClick={onRemove}
          className="remove-btn"
        >Remove</button>
      </div>
    );
  }
}

InputTemplate.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default InputTemplate;
