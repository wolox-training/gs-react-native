import Immutable from 'seamless-immutable';
import { createReducer, completeState, completeReducer } from 'redux-recompose';

import { actions } from './actions.js';

export const stateDescription = {
  email: null,
  token: null
};

// const initialState = {
//   email: null,
//   token: null
// };

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.LOG_IN_USER]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case actions.LOG_IN_USER:
//       return state;

//     case actions.LOG_IN_USER_SUCCESS:
//       return {
//         ...state,
//         email: action.payload.email,
//         token: action.payload.token
//       };

//     case actions.LOG_IN_USER_FAILED:
//       return state;
//     default:
//       return state;
//   }
// }
