import React, { Component } from "react";

export default class InputTemplate extends Component {
  mouseOver() {
    this.setState({hover: true});
  }

  mouseOut() {
    this.setState({hover: false});

  }

  render () {
    let hover = this.state && this.state.hover;
    let label = this.props.label ? <label>{this.props.label}</label> : undefined;

    return (
      <div
        className="input-wrapper"
        style={{
          background: (hover ? 'green' : null)
        }}
        onMouseOver={ () => this.mouseOver() }
        onMouseOut={ () => this.mouseOut() }>
        {label}
        <input type={this.props.type}
               placeholder={this.props.placeholder}
               value={this.props.value}
               required={this.props.required}  />
      </div>
    );
  }
}
