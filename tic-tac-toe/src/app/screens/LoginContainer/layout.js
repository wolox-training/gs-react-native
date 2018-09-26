import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { CustomInput } from '../../components/CustomInput';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field name="user" component={CustomInput} type="text" label="usuario: " />
        <Field name="pass" component={CustomInput} type="password" label="contraseña: " />
        <button type="submit"> Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(Login);
