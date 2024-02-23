function replacer(match) {
  return `<mark>${match}</mark>`;
}

function highlightSelectedWord(selectedWord, toDo) {
  let regexPattern = new RegExp(selectedWord, 'g');
  let modifiedToDo = toDo.replace(regexPattern, replacer);
  return modifiedToDo;
}

function displayToDoText(textToHighlight, toDoText) {
  if (props.textToHighlight.length > 0) {
    return highlightSelectedWord(textToHighlight, toDoText);
  } else {
    return props.value;
  }
}

export default displayToDoText;
