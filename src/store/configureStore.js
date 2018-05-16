// redux deps
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from './sagas';

//import thunk from 'redux-thunk';
// import DevTools from '../containers/DevTools';

export const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
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
export const runSaga = () => sagaMiddleware.run(mySaga);