import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { Switch } from 'react-router';

import GameContainer from './app/screens/Game/';

import './scss/index.scss';
import store, { history } from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import Login from './app/screens/Login';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/game" component={GameContainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
