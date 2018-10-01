import { actions } from './actions.js';

export default function reducer1(state = 0, action) {
  switch (action.type) {
    case actions.VALIDATE_USER:
      break;

    case actions.VALIDATE_USER_SUCCESS:
      state = { email: action.email, token: action.token };
      break;

    case actions.VALIDATE_USER_FAILED:
      break;
  }

  return state;
}
