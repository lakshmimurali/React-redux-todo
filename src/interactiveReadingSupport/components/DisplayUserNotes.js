import React, { useState, useEffect } from 'react';

function getNote(sentence, notesList) {
  let requiredNoteInfo = notesList.filter((noteObj) => {
    return noteObj[sentence] !== undefined;
  });
  //console.log('requiredNoteInfo is >>>>>>>>>>>>>>>', requiredNoteInfo.po());
  console.log(requiredNoteInfo);
  if (requiredNoteInfo.length) {
    return requiredNoteInfo[0][sentence];
  } else {
    return {
      note: '',
      sentence: '',
    };
  }
}

function ShowUserWrittenNotes(props) {
  let [userNote, setUserNote] = useState('');
  let [isEditMode, setEditMode] = useState(false);

  useEffect(() => {
    setEditMode(false);
  }, [props.selectedText]);

  let selectedText = props.selectedText;
  let noteList = props.notesList;
  console.log('noteList is', noteList);
  let noteInfo = getNote(selectedText, noteList);
  console.log('noteInfo is >>>>>>', noteInfo);
  if (!isEditMode) {
    userNote = noteInfo.note;
  }

  let updateTextAreaValueHandler = (event) => {
    let enteredText = event.target.value;
    setUserNote(enteredText);
    setEditMode(true);
    console.log('Inside onchange event handler', enteredText);
  };

  let updateUserNote = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      console.log('Inside updateUserNote', noteInfo, selectedText);
      if (noteInfo.note !== '' && noteInfo.note !== undefined) {
        props.updateNote({ note: userNote, sentence: selectedText });
      } else {
        props.storeNote({ note: userNote, sentence: selectedText });
      }
    }
  };
  let textAreaElement = (
    <textarea
      value={userNote}
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
