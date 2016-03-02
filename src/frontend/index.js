import './index.html';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import App from './components/App.jsx';
import LoginScreen from './components/LoginScreen.jsx';
import FaqScreen from './components/FaqScreen.jsx';

const store = configureStore();

//const history = browserHistory;
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginScreen}/>
        <Route path="faq" component={FaqScreen}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  const showDevTools = require('./showDevTools').default;
  showDevTools(store);
}
