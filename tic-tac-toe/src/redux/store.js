import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';

const reducers = {
  form: formReducer,
  routing: routerReducer,
  auth
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
