function toDoItemsReducer(state = { defaultView: 'All', toDos: [] }, action) {
  if (action.type === 'ADD_TO_DO') {
    let actionId = action.id;
    console.log('State inside toDoItemsReducer', state, action);
    return {
      ...state,
      toDos: [
        ...state.toDos,
        {
          actionId: {
            value: action.value,
            id: action.id,
            completed: false,
          },
        },
      ],
    };
  } else if (action.type === 'Toggle_TO_DO') {
    let actionId = action.id;
    let updatedToDos = state.toDos.map((toDo) => {
      toDo[actionId].id === action.id
        ? { actionId: { ...toDo[actionId], isCompleted: !toDo.isCompleted } }
        : toDo;
    });

    return {
      ...state,
      toDos: updatedToDos,
    };
  }

  return state;
}

export default toDoItemsReducer;
