import Immutable from 'seamless-immutable';
import { createReducer, completeState, completeReducer } from 'redux-recompose';

import { actions } from './actions.js';

export const stateDescription = {
  email: null,
  token: null
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.LOG_IN_USER]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
