// redux deps
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') middleware.push(logger);

export default () => createStore(
  reducer,
  applyMiddleware(...middleware),
);