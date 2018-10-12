import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import { FORM_NAME, FIELDS } from "./fields";
import CustomInput from "../../../../components/CustomInput";

class Input extends Component {
  render() {
    const { placeholder, handleSubmit } = this.props;
    return (
      <Field
        name={FIELDS.toDo}
        component={CustomInput}
        onSubmitEditing={handleSubmit}
        placeholder={placeholder}
      />
    );
  }
}

Input.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default reduxForm({
  form: FORM_NAME
})(Input);
