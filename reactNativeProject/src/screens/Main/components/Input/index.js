import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import { FORM_NAME, FIELDS } from "./fields";
import CustomInput from "../../../../components/CustomInput";

function Input({ placeholder, handleSubmit }) {
  return (
    <Field
      name={FIELDS.toDo}
      component={CustomInput}
      onSubmitEditing={handleSubmit}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default reduxForm({
  form: FORM_NAME
})(Input);
