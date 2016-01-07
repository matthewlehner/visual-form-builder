import { connect } from "react-redux";

import Workspace from "../components/workspace";
import { addInput, updateInput } from "../actions/form";
import { setEditing } from "../actions/workspace";

function mapStateToProps(state) {
  return {
    inputs: state.form,
    workspace: state.workspace
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddInput: (typeName) => dispatch(addInput(typeName)),
    onUpdateInput: (index, props) => {
      dispatch(updateInput(index, props));
      dispatch(setEditing(false));
    },
    onEditInput: (index) => dispatch(setEditing(index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace);
