import './index.html';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Immutable from 'immutable';

import configureStore from './store/configureStore';
import App from './App.jsx';

const store = configureStore(Immutable.fromJS({greeting : 'Hello.'}));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  const showDevTools = require('./showDevTools').default;
  showDevTools(store);
}
