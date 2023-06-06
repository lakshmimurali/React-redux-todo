function constructToggleToDoPayLoad(toDoId) {
  console.log('Inside constructToggleToDoPayLoad', toDoId);
  return {
    type: 'Toggle_TO_DO',
    id: toDoId,
  };
}

export default constructToggleToDoPayLoad;
