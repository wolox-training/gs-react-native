import AuthService from '../../services/LoginService';

export const actions = {
  LOG_IN_USER: 'VALIDATE_USER',
  LOG_IN_SUCCESS: 'VALIDATE_USER_SUCCESS',
  LOG_IN_FAILED: 'VALIDATE_USER_FAILED'
};

export const actionsCreators = {
  login: values => async dispatch => {
    dispatch({ type: actions.LOG_IN_USER });
    const response = await AuthService.getUserDetail(values);
    if (response.ok) {
      dispatch({
        type: actions.LOG_IN_SUCCESS,
        payload: { token: response.data, email: values.user }
      });
    } else {
      alert('Salio mal');
      dispatch({ type: actions.LOG_IN_FAILED });
    }
  }
};
