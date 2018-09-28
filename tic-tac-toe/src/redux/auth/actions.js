import AuthService from '../../services/LoginService';

const actions = {
  VALIDATE_USER: 'VALIDATE_USER',
  VALIDATE_USER_SUCCESS: 'VALIDATE_USER_SUCCESS',
  VALIDATE_USER_FAILED: 'VALIDATE_USER_FAILED'
};

export const actionsCreators = {
  login: values => async dispatch => {
    dispatch({ type: actions.VALIDATE_USER });
    const response = await AuthService.getUserDetail(values);
    if (response.ok) {
      console.log(response.data);
      dispatch({ type: actions.VALIDATE_USER_SUCCESS });
    } else {
      alert('Salio mal');
      dispatch({ type: actions.VALIDATE_USER_FAILED });
    }
  }
};
