import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import { Provider } from 'react-redux';

import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import Login from './app/screens/LoginContainer';

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
