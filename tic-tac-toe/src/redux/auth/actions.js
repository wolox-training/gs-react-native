import { push } from 'react-router-redux';
import { completeTypes, createTypes, withPostSuccess, withPostFailure } from 'redux-recompose';

import AuthService from '../../services/LoginService';

export const actions = createTypes(completeTypes(['LOG_IN_USER']), '@@REWARDS');

export const actionsCreators = {
  login: values => ({
    type: actions.LOG_IN_USER,
    target: 'token',
    service: AuthService.getUserDetail,
    payload: values,
    injections: [
      withPostSuccess(dispatch => dispatch(push('/game'))),
      withPostFailure(() => {
        alert('Salio mal');
      })
    ]
  })
};
