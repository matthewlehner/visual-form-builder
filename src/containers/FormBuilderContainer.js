import { connect } from "react-redux";
import FormBuilder from "../components/FormBuilder";
import { addInput, updateInput } from "../actions/form";

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddInput: (typeName) => dispatch(addInput(typeName)),
    onUpdateInput: (index, props) => dispatch(updateInput(index, props))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormBuilder);
