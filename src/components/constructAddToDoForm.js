import React, { useState } from 'react';

function ConstructAddToDoForm(props) {
  /*console.log(
    'Inside ConstructAddToDoForm',
    props.addToDoActionCreatorAsProps.invokeaddToDoActionCreator
  );*/
  let [toDo, setToDo] = useState('');

  let todoHandler = (event) => {
    console.log(toDo);
    return setToDo(event.target.value);
  };

  let invokeToDoAction = () => {
    return props.addToDoActionCreatorAsProps.invokeaddToDoActionCreator(toDo);
  };
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      invokeToDoAction();
      event.target.value = '';
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
      />

      <button onClick={invokeToDoAction}>Add To Do</button>
    </div>
  );
}

export default ConstructAddToDoForm;
