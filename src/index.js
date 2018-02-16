import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createEngine from 'redux-storage-engine-localstorage';
import logger from 'redux-logger';
import * as storage from 'redux-storage'
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';


//Configure the store be saved and loaded from the local storage(Web Storage)
const engine = createEngine('tasks');
const reducer = storage.reducer(rootReducer);
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(reducer, applyMiddleware(logger));//TODO - Logging may not be necessary.
const load = storage.createLoader(engine);
load(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
