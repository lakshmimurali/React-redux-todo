import React from 'react';
import displayToDoText from './helperForHighlightingText.js';
import parse from 'html-react-parser';

function Todo(props) {
  console.log('Inside ToDo', props);
  let toggleToDo = () => {
    return props.invokeToggleToDoActionCreator(props.id);
  };
  let renderedString = displayToDoText(props.textToHighlight, props.value);

  return (
    <li key={props.id} extref={props.id} onClick={toggleToDo}>
      {parse(renderedString)} {props.completed === true ? 'Done' : ''}{' '}
    </li>
  );
}

export default Todo;
