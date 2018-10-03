import { actions } from './actions.js';

const initialState = {
  email: null,
  token: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOG_IN_USER:
      return state;

    case actions.LOG_IN_USER_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token
      };

    case actions.LOG_IN_USER_FAILED:
      return state;
    default:
      return state;
  }
}
