import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import LoginContainer from './app/screens/Login';

ReactDOM.render(
  <Provider store={store}>
    <LoginContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
