let index = 0;
function constructAddToDoPayLoad(toDoValue) {
  console.log('From AddtoDoForm', toDoValue);
  return {
    type: 'ADD_TO_DO',
    value: toDoValue,
    id: index++,
  };
}

export default constructAddToDoPayLoad;
