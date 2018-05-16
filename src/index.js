// react deps
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import generateStore from './store/configureStore';
import { runSaga } from './store/configureStore';
//import DevTools from './containers/DevTools';


const store = generateStore();
runSaga();

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
