import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import reducer1 from './auth/reducer';

const reducers = {
  form: formReducer,
  reducer1
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
