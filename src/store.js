// global __DEBUG__
// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createReducer from 'reducer';

let store = null;

export default function configureStore(preloadedState, defaultMiddleware, defaultReducer) {
  const middleware = defaultMiddleware || [];
  middleware.push(thunk);

  const enhancers = [
    applyMiddleware(...middleware)
  ];

  store = createStore(createReducer(defaultReducer), preloadedState, compose(...enhancers));
  store.asyncReducers = {};
  store.defaultReducer = defaultReducer;

  return store;
}
