import React from 'react';

function Todo(props) {
  let toggleToDo = () => {
    return props.invokeToggleToDoActionCreator(props.id);
  };

  return (
    <li onClick={toggleToDo}>
      {props.value} {props.isCompleted}{' '}
    </li>
  );
}

export default Todo;
