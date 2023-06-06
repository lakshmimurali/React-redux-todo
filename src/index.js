import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './store/AppStore.js';

import App from './App';

const rootElement = document.getElementById('root');

render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  rootElement
);
