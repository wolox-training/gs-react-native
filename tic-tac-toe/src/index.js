import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import Game from './app/screens/Game';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
