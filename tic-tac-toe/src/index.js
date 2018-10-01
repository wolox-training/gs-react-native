import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import Game from './app/screens/Game';

import './scss/index.scss';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
