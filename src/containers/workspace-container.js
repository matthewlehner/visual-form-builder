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
    onStopEditInput: () => dispatch(stopEditing()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace);
