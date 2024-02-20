import React, { useState } from 'react';

function getNote(sentence, notesList) {
  let requiredNoteInfo = notesList.filter((noteObj) => {
    return noteObj[sentence] !== undefined;
  });
  return requiredNoteInfo;
}

function ShowUserWrittenNotes(props) {
  let [userNote, setUserNote] = useState('');
  let selectedText = props.selectedText;
  let noteList = props.notesList;
  console.log('noteList is', noteList);
  let noteInfo = getNote(selectedText, noteList);

  let updateTextAreaValueHandler = (event) => {
    let enteredText = event.target.value;
    setUserNote(enteredText);
  };

  let updateUserNote = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      console.log('Inside updateUserNote', noteInfo, selectedText);
      if (noteInfo.length > 0) {
        props.updateNote({ note: userNote, sentence: selectedText });
      } else {
        props.storeNote({ note: userNote, sentence: selectedText });
      }
    }
  };
  let textAreaElement = (
    <textarea
      value={noteInfo.note}
      style={{ width: '200px', height: '200px' }}
      name="usernote"
      onChange={updateTextAreaValueHandler}
      onKeyDown={updateUserNote}
    />
  );
  return (
    <div>
      <div> Selected Text:{selectedText} </div>
      <div>
        {' '}
        Note For Selected Text: {textAreaElement}
        <br />
      </div>
    </div>
  );
}

export default ShowUserWrittenNotes;
