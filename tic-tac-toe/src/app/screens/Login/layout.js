import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import TextInput from '../../components/TextInput';
import { validate } from '../../validation';

import { FIELDS, FORM_NAME } from './fields';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field name={FIELDS.user} component={TextInput} label="user " />
        <Field name={FIELDS.pass} component={TextInput} label="pass " />
        <button type="submit"> Submit</button>
      </form>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: FORM_NAME,
  validate
})(Login);
