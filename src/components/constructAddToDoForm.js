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
      <input
        type="textbox"
        name="addToDo"
        value={toDo}
        onChange={todoHandler}
        onKeyDown={handleKeyDown}
      />
      <button onClick={invokeToDoAction}>Add To Do</button>
    </div>
  );
}

export default ConstructAddToDoForm;
