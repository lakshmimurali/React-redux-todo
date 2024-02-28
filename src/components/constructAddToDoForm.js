import React, { useState, useRef } from 'react';

function ConstructAddToDoForm(props) {
  /*console.log(
    'Inside ConstructAddToDoForm',
    props.addToDoActionCreatorAsProps.invokeaddToDoActionCreator
  );*/
  let [toDo, setToDo] = useState('');
  let toDoElementRef = useRef('textarea-todo');

  let todoHandler = (event) => {
    console.log(toDo);
    return setToDo(event.target.value);
  };

  let invokeToDoAction = () => {
    props.addToDoActionCreatorAsProps.invokeaddToDoActionCreator(toDo);
    toDoElementRef.current.value = '';
    return null;
  };
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      invokeToDoAction();
    }
  };
  return (
    <div>
      <textarea
        name="addToDo"
        value={toDo}
        onChange={todoHandler}
        style={{ width: '300px', height: '100px', wrap: 'hard' }}
        onKeyDown={handleKeyDown}
        autoFocus
        ref={toDoElementRef}
      />

      <button onClick={invokeToDoAction}>Add To Do</button>
    </div>
  );
}

export default ConstructAddToDoForm;
