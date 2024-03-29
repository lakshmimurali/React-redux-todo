function toDoItemsReducer(state = { selectedView: 'All', toDos: [] }, action) {
  if (action.type === 'ADD_TO_DO') {
    let actionId = action.id;
    console.log('State inside toDoItemsReducer', state, action);
    return {
      ...state,
      toDos: [
        ...state.toDos,
        {
          [actionId]: {
            value: action.value,
            id: action.id,
            completed: false,
            textToHighlight: '',
          },
        },
      ],
    };
  } else if (action.type === 'Toggle_TO_DO') {
    /*console.log('inside toggle case reducer', action, state);
    
    console.log('actionId', actionId);
    let taskToUpdate = state.toDos[actionId];
    console.log('taskToUpdate', taskToUpdate);
    let completedStatus = taskToUpdate[actionId].completed;
    console.log('completedStatus', completedStatus);
    let togglecompletedStatus = !completedStatus;
    console.log(togglecompletedStatus);

    return {
      ...state,
      toDos: [
        ...state.toDos,
        {
          [actionId]: {
            ...taskToUpdate[actionId],
            completed: togglecompletedStatus,
          },
        },
      ],
    };*/
    console.log('state is', state);
    let actionId = action.id;
    let updatedToDos = state.toDos.map((toDo, index) => {
      let keyOftaskItemObj = Object.keys(toDo);
      let taskObj = toDo[keyOftaskItemObj];
      console.log('taskObj is', taskObj);
      //let keyOftaskItemObj = Object.keys(taskObj);

      /*console.log('taskItemObj is', taskItemObj);
      let keyOftaskItemObj = Object.keys(taskItemObj);
      console.log('keyOftaskItemObj is >>>>>', keyOftaskItemObj);
      let taskObj = taskItemObj[keyOftaskItemObj];*/
      console.log('inside map', taskObj);
      return taskObj.id === actionId
        ? {
            [actionId]: {
              ...taskObj,
              completed: !taskObj.completed,
            },
          }
        : toDo;
    });
    console.log('updatedToDos', updatedToDos);
    return {
      ...state,
      toDos: updatedToDos,
    };
  } else if (action.type === 'highlight_todo') {
    console.log(' Inside  highlight_todo >>>>>>>>> state is', state);
    let actionId = action.id;
    console.log('Checking type of Action Id', typeof actionId);
    let updatedToDos = state.toDos.map((toDo, index) => {
      let keyOftaskItemObj = Object.keys(toDo);
      let taskObj = toDo[keyOftaskItemObj];
      console.log('taskObj is', taskObj);
      console.log('checking type of taskobjid', typeof taskObj.id);
      console.log('inside map', taskObj);
      return taskObj.id === actionId
        ? {
            [actionId]: {
              ...taskObj,
              textToHighlight: action.selectedWord,
            },
          }
        : toDo;
    });
    console.log('HighlightToDos', updatedToDos);
    return {
      ...state,
      toDos: updatedToDos,
    };
  }

  return state;
}

export default toDoItemsReducer;
