/* global window, document */

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from 'store';

import DefaultRoute from './Router';
import { contentPerUrl } from './contentPerUrl';

import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();


export function rootComponent(storeParam, component) {
  return (
    <Provider store={storeParam}>
      <DefaultRoute component={component} />
    </Provider>
  );
}

function renderComponent(component, callback) {
  ReactDOM.render(
    rootComponent(store, component),
    documentContainer, callback
  );
}

function triggerLocationChange(location, action) {
  if (action === 'PUSH') {
    window.scrollTo(0, 0);
  }
  store.dispatch(contentPerUrl(location.pathname, location.search));
}


const documentContainer = document.getElementById('root')
const callback = () => {}

// Grab the state from a global variable injected into the server-generated HTML
// eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
// eslint-disable-next-line no-underscore-dangle
delete window.__PRELOADED_STATE__;

const middleware = [];

let renderCallback;

if (callback === null || callback === undefined) {
  renderCallback = () => {
  };
} else {
  renderCallback = callback;
}

const store = configureStore(preloadedState, middleware);

const path = history.location.pathname;
const queryData = history.location.search;

history.listen(triggerLocationChange);

console.log("start");

store.dispatch(contentPerUrl(path, {
  queryParams: queryData
}, (Component) => {
  console.log("dispatch");
  renderComponent(Component, renderCallback);
}));
