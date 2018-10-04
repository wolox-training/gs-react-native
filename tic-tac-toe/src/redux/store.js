import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import auth from './auth/reducer';
import game from './Game/reducer';

const reducers = {
  form: formReducer,
  auth,
  game
};

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
export default store;
