import React, { useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore, { persistor } from './store/AppStore.js';

import { PersistGate } from 'redux-persist/integration/react';

import App from './App.js';
import LoginForm from './LoginForm.js';
import LoginFormPhoneEmail from './LoginForm_Phone.Email.js';

function RenderApp() {
  const [loggedIn, setLoggedInState] = useState(false);
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        {loggedIn === true ? (
          <App />
        ) : (
          <LoginFormPhoneEmail setValue={setLoggedInState} />
        )}
      </PersistGate>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
render(<RenderApp />, rootElement);

/*{loggedIn === true ? <App /> : <LoginForm setValue={setLoggedInState} />}*/
