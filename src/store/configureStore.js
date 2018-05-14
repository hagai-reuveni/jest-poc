// redux deps
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers';
import thunk from 'redux-thunk';
// import DevTools from '../containers/DevTools';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk];

const enhancer = (()=> {
  const isProduction = process.env.NODE_ENV === 'production';
  //const isProduction = true;
  if (isProduction) {
    return compose(applyMiddleware(...middleware));
  }

  middleware.push(logger);
  return composeWithDevTools(
      applyMiddleware(...middleware),
    )
  // return compose(
  //   applyMiddleware(...middleware),
  //   DevTools.instrument()
  // )
})();


export default () => createStore(
  reducer,
  enhancer,
);