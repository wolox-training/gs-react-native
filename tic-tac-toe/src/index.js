import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';

import GameContainer from './app/screens/Game/index';

import './scss/index.scss';
import store, { history } from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import Login from './app/screens/Login';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="Game" component={GameContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
