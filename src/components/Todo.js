import React from 'react';

function Todo(props) {
  /*console.log('Inside ToDo', props);*/
  let toggleToDo = () => {
    return props.invokeToggleToDoActionCreator(props.id);
  };

  return (
    <li key={props.id} onClick={toggleToDo}>
      {props.value} {props.isCompleted}{' '}
    </li>
  );
}

export default Todo;
