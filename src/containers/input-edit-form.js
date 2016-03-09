import { connect } from "react-redux";

import { updateInput } from "../actions/form";
import { stopEditing } from "../actions/workspace";

import InputEditForm from "../components/InputEditForm";

function mapStateToProps(state) {
  return {
    input: state.form[state.workspace.editingIndex],
    inputIndex: state.workspace.editingIndex
  };
}

function submitAndStopEditing(dispatch, index, props) {
  dispatch(updateInput(index, props));
  dispatch(stopEditing());
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (index, props) => submitAndStopEditing(dispatch, index, props),
    onCancel: () => dispatch(stopEditing())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputEditForm);
