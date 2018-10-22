import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionsCreators } from '../../../redux/auth/actions';

import Login from './layout';

class LoginContainer extends Component {
  submit = values => this.props.login(values);

  render() {
    return <Login onSubmit={this.submit} />;
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = () => ({
  login: values => {
    actionsCreators.login(values);
  }
});
export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
