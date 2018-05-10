import React from 'react';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';

const store = createStore(reducer);

export default ({ children }) => <Provider store={ store }>{ children }</Provider>