import { actions } from './actions.js';

const initialState = {
  email: null,
  token: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actions.VALIDATE_USER:
      return state;

    case actions.VALIDATE_USER_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token
      };

    case actions.VALIDATE_USER_FAILED:
      return state;
    default:
      return state;
  }
}
