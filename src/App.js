import React from 'react';
import TodoList from './components/TodoList.js';
import ConnectAddToDoForm from './containers/connectAddToDoForm.js';
import Footer from './components/footer.js';

import './style.css';

export default function App() {
  return (
    <div>
      <ConnectAddToDoForm />
      <TodoList />
      <Footer />
    </div>
  );
}
