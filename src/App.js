import React from 'react';
import SubscribeToDoList from './containers/toDoDataListSubscriber.js';
import ConnectAddToDoForm from './containers/connectAddToDoForm.js';
import Footer from './components/footer.js';

import './style.css';

export default function App() {
  return (
    <div>
      <ConnectAddToDoForm />
      <SubscribeToDoList />
      <Footer />
    </div>
  );
}
