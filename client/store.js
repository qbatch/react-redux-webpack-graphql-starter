import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers/index';

export const history = createHistory();


export const store = createStore(
  reducers,
  applyMiddleware(promise(), thunk, createLogger())
);
