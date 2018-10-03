import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Game from './app/screens/Game';

import './scss/index.scss';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import Login from './app/screens/Login';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/Login" component={Login}>
        <Route path="/Game" component={Game} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
