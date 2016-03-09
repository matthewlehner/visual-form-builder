import { connect } from "react-redux";

import { removeInput, reorderInputs } from "../actions/form";
import { setEditing } from "../actions/workspace";

import FormContent from "../components/form-content";

function mapStateToProps(state) {
  return {
    inputs: state.form,
    isEditing: state.workspace.isEditing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onReorderInputs: (currentIndex, nextIndex) => dispatch(reorderInputs(currentIndex, nextIndex)),
    onEditInput: (index) => dispatch(setEditing(index)),
    onRemoveInput: (index) => dispatch(removeInput(index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContent);
