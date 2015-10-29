import { Component } from "react";
import { connect } from "react-redux";

import FormBuilder from "../components/FormBuilder";
import { addInput } from "../actions/form";

function mapStateToProps(state) {
  return {
    value: state.form
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddInput: () => dispatch(addInput());
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormBuilder);
