import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import auth from './auth/reducer';

const reducers = {
  form: formReducer,
  auth
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
