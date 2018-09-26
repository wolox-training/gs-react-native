import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import registerServiceWorker from './registerServiceWorker';
import LoginContainer from './app/screens/LoginContainer/layout';

const reducers = {
  form: formReducer
};

const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <LoginContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
