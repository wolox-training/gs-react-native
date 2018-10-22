import { push } from 'react-router-redux';
import { completeTypes, createTypes, withPostSuccess, withPostFailure } from 'redux-recompose';

import AuthService from '../../services/LoginService';
import store from '../store';

import { stateDescription } from './reducer';

// export const actions = {
//   LOG_IN_USER: 'LOG_IN_USER',
//   LOG_IN_USER_SUCCESS: 'LOG_IN_USER_SUCCESS',
//   LOG_IN_USER_FAILED: 'LOG_IN_USER_FAILED'
// };

export const actions = createTypes(completeTypes(['LOG_IN_USER']), '@@REWARDS');

export const actionsCreators = {
  login: values => ({
    type: actions.LOG_IN_USER,
    target: 'token',
    service: AuthService.getUserDetail(values),
    injections: [
      withPostSuccess(console.log(stateDescription.token), store.dispatch(push('/game'))),
      withPostFailure(() => {
        alert('Salio mal');
      })
    ]
  })
};
// export const actionsCreators = {
//   login: values => async dispatch => {
//     dispatch({ type: actions.LOG_IN_USER });
//     const response = await AuthService.getUserDetail(values);
//     if (response.ok) {
//       dispatch({
//         type: actions.LOG_IN_USER_SUCCESS,
//         payload: { token: response.data, email: values.user }
//       });
//       store.dispatch(push('/game'));
//     } else {
//       alert('Salio mal');
//       dispatch({ type: actions.LOG_IN_USER_FAILED });
//     }
//   }
// };
