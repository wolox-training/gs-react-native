import { push } from 'react-router-redux';

import AuthService from '../../services/LoginService';
import store from '../store';

export const actions = {
  LOG_IN_USER: 'LOG_IN_USER',
  LOG_IN_USER_SUCCESS: 'LOG_IN_USER_SUCCESS',
  LOG_IN_USER_FAILED: 'LOG_IN_USER_FAILED'
};

export const actionsCreators = {
  login: values => async dispatch => {
    dispatch({ type: actions.LOG_IN_USER });
    const response = await AuthService.getUserDetail(values);
    if (response.ok) {
      dispatch({
        type: actions.LOG_IN_USER_SUCCESS,
        payload: { token: response.data, email: values.user }
      });
      store.dispatch(push('/game'));
    } else {
      alert('Salio mal');
      dispatch({ type: actions.LOG_IN_USER_FAILED });
    }
  }
};
