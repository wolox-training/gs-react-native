import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import auth from './auth/reducer';

export const history = createHistory();

const middleware = routerMiddleware(history);

const reducers = {
  form: formReducer,
  routing: routerReducer,
  auth
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk, middleware));
export default store;
