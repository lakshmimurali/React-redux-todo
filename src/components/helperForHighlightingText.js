function replacer(match) {
  return `<mark>${match}</mark>`;
}

function highlightSelectedWord(selectedWord, toDo) {
  let regexPattern = new RegExp(selectedWord, 'g');
  let modifiedToDo = toDo.replace(regexPattern, replacer);
  return modifiedToDo;
}

function displayToDoText(textToHighlight, toDoText) {
  if (textToHighlight !== '' && textToHighlight !== undefined) {
    return highlightSelectedWord(textToHighlight, toDoText);
  } else {
    return toDoText;
  }
}

export default displayToDoText;
