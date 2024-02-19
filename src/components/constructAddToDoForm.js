import React, { useState } from 'react';

function ConstructAddToDoForm(props) {
  /*console.log(
    'Inside ConstructAddToDoForm',
    props.addToDoActionCreatorAsProps.invokeaddToDoActionCreator
  );*/
  let [toDo, setToDo] = useState('');

  let todoHandler = (event) => {
    return setToDo(event.target.value);
  };

  let invokeToDoAction = () => {
    return props.addToDoActionCreatorAsProps.invokeaddToDoActionCreator(toDo);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      invokeToDoAction();
    }
  };
  return (
    <div>
      <textarea
        name="addToDo"
        value={toDo}
        onChange={todoHandler}
        style={{ width: '400px', height: '200px' }}
        onKeyDown={handleKeyDown}
      />
      <br />
      <button onClick={invokeToDoAction}>Add To Do</button>
    </div>
  );
}

export default ConstructAddToDoForm;
