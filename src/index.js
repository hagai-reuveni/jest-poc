// react deps
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// redux deps
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [];
if (process.env.NODE_ENV !== 'production') middleware.push(logger);

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
