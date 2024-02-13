import React from 'react';
import SubscribeToDoList from './containers/toDoDataListSubscriber.js';
import ConnectAddToDoForm from './containers/connectAddToDoForm.js';
import Footer from './components/footer.js';

import RenderUIActionsBasedOnTextSelectionChange from './interactiveReadingSupport/containers/ContainerToShowIREUI.js';

import UpdateSelectedText from './interactiveReadingSupport/containers/ContainerToUpdatedSelectedText.js';

import RenderMeaningInfo from './interactiveReadingSupport/containers/ContainerToRenderMeaningInfo.js';

import './style.css';

export default function App() {
  return (
    <div>
      <ConnectAddToDoForm />
      <SubscribeToDoList />
      <Footer />
      <UpdateSelectedText />
      <RenderUIActionsBasedOnTextSelectionChange />
      <RenderMeaningInfo />
    </div>
  );
}
