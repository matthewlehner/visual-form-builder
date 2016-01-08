import { connect } from "react-redux";

import Workspace from "../components/workspace";
import { addInput, updateInput, removeInput, reorderInputs } from "../actions/form";
import { setEditing, stopEditing } from "../actions/workspace";

function mapStateToProps(state) {
  return {
    inputs: state.form,
    workspace: state.workspace
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddInput: (typeName) => dispatch(addInput(typeName)),
    onUpdateInput: (index, props) => dispatch(updateInput(index, props)),
    onRemoveInput: (index) => dispatch(removeInput(index)),
    onEditInput: (index) => dispatch(setEditing(index)),
    onStopEditInput: () => dispatch(stopEditing()),
    onReorderInputs: (currentIndex, nextIndex) => dispatch(reorderInputs(currentIndex, nextIndex))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace);
