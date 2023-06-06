function toDoItemsReducer(state = { defaultView: 'All', toDos: [] }, action) {
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
          },
        },
      ],
    };
  } else if (action.type === 'Toggle_TO_DO') {
    console.log('inside toggle case reducer', action);
    let actionId = action.id;
    console.log('actionId', actionId);
    let taskToUpdate = state.toDos[actionId];
    console.log('taskToUpdate', taskToUpdate);
    let completedStatus = taskToUpdate.completed;
    console.log('completedStatus', completedStatus);
    let togglecompletedStatus = !completedStatus;
    console.log(togglecompletedStatus);

    return {
      ...state,
      toDos: [
        ...state.toDos,
        {
          [actionId]: {
            value: action.value,
            id: action.id,
            completed: togglecompletedStatus,
          },
        },
      ],
    };

    /*let updatedToDos = state.toDos.map((toDo) => {
      console.log('inside map', toDo, action.id, toDo[actionId].id);
      toDo[actionId].id === action.id
        ? {
            [actionId]: {
              ...toDo[actionId],
              isCompleted: !toDo[actionId].isCompleted,
            },
          }
        : toDo;
    });
    console.log('Inside toggle todo', {
      ...state,
      toDos: updatedToDos,
    });

    return {
      ...state,
      toDos: updatedToDos,
    };*/
  }

  return state;
}

export default toDoItemsReducer;
