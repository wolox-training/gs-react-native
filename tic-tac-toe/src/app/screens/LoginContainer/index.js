import React, { Component } from 'react';

import Login from './layout';

class LoginContainer extends Component {
  submit = values => windows.alert(JSON.stringify(values, null, 4));

  render() {
    <Login onSubmit={this.submit} />;
  }
}

export default LoginContainer;
