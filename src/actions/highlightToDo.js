function actionCreatorForHightlightingToDo(payload) {
  console.log('Inside hightlightToDo', payload.toDoId);
  return {
    type: 'highlight_todo',
    id: payload.toDoId,
    selectedWord: payload.selectedWord,
  };
}

export default actionCreatorForHightlightingToDo;
