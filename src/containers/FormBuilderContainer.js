import { connect } from "react-redux";

import FormBuilder from "../components/FormBuilder";

function mapStateToProps(state) {
  return {
    isEditing: state.workspace.isEditing
  };
}

export default connect(
  mapStateToProps,
  null
)(FormBuilder);
