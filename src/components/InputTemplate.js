import React, { Component, PropTypes } from "react";

export default class InputTemplate extends Component {
  handleEditClick(event) {
    event.preventDefault();
  }

  render() {
    const label = this.props.label ? <label>{this.props.label}</label> : undefined;
    const { type, onEdit, onRemove } = this.props;
    const className = `input-wrapper ${type}`;

    return (
      <div className={className}>
        {label}
        <input {...this.props} />
        <button
          onClick={ () => onEdit() }
          className="edit-btn"
        >Edit</button>
        <button
          onClick={ () => onRemove() }
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
