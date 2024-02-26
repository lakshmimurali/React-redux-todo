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
    <li key={props.id} extref={props.id}>
      {parse(renderedString)} {props.completed === true ? 'Done' : ''}{' '}
      <label class="switch">
        <input
          type="checkbox"
          onClick={toggleToDo}
          checked={props.completed === true}
        />
        <span class="slider round"></span>
      </label>
    </li>
  );
}

export default Todo;
