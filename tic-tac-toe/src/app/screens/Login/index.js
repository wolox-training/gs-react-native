import React, { Component } from 'react';
import { connect } from 'react-redux';

import { obtainUser } from '../../actionCreator/index';

import Login from './layout';

class LoginContainer extends Component {
  // aca deberiamos hacer el llamado al servicio
  submit = values => props.obtainUser(values);

  render() {
    return <Login onSubmit={this.submit} />;
  }
}
const mapDispatchToProp = dispatch => ({
  obtainUser(values) {
    dispatch(obtainUser(values));
  }
});
export default connect(mapDispatchToProp)(LoginContainer);
