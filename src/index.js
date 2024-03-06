import React, { useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './store/AppStore.js';

import App from './App.js';
import LoginForm from './LoginForm.js';

function RenderApp() {
  const [loggedIn, setLoggedInState] = useState(false);
  return (
    <Provider store={appStore}>
      {loggedIn === true ? <App /> : <LoginForm setValue={setLoggedInState} />}
    </Provider>
  );
}

const rootElement = document.getElementById('root');
render(<RenderApp />, rootElement);
