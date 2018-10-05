import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import auth from './auth/reducer';
import game from './Game/reducer';

export const history = createHistory();

const middleware = routerMiddleware(history);

const reducers = {
  form: formReducer,
  routing: routerReducer,
  auth,
  game
};

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, middleware];

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
export default store;
