import React, { Component } from 'react';

import Login from './layout';

class LoginContainer extends Component {
  submit = values => alert(JSON.stringify(values));

  render() {
    return <Login onSubmit={this.submit} />;
  }
}

export default LoginContainer;
