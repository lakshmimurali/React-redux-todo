import React from 'react';
import displayToDoText from './helperForHighlightingText.js';

function Todo(props) {
  console.log('Inside ToDo', props);
  let toggleToDo = () => {
    return props.invokeToggleToDoActionCreator(props.id);
  };

  return (
    <li key={props.id} extref={props.id} onClick={toggleToDo}>
      {displayToDoText(props.textToHighlight, props.value)}{' '}
      {props.completed === true ? 'Done' : ''}{' '}
    </li>
  );
}

export default Todo;
