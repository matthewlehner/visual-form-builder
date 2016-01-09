import { connect } from "react-redux";

import { addInput, removeInput } from "../actions/form";
import DraggableInputTypeTemplate from "../components/draggable-input-type-template";

function mapStateToProps(state) {
  return {
    inputLength: state.form.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addInput: (typeName) => dispatch(addInput(typeName)),
    removeInput: (index) => dispatch(removeInput(index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DraggableInputTypeTemplate);
