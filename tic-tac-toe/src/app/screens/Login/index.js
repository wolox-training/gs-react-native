import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionsCreators } from '../../../redux/auth/actions';

import Login from './layout';

class LoginContainer extends Component {
  // aca deberiamos hacer el llamado al servicio
  submit = values => this.props.login(values);

  render() {
    return <Login onSubmit={this.submit} />;
  }
}
const mapDispatchToProps = dispatch => ({
  login: values => {
    dispatch(actionsCreators.login());
  }
});
export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
