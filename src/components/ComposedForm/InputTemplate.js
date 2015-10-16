import React, { Component } from "react";

export default class InputTemplate extends Component {
  render () {
    let label = this.props.label ? <label>{this.props.label}</label> : undefined;

    return (
      <div className="input-wrapper">
        {label}
        <input type={this.props.type}
               placeholder={this.props.placeholder}
               value={this.props.value} />
      </div>
    );
  }
}
