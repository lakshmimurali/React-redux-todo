import React, { useState, useEffect } from 'react';
import highlighter from './Highlighter.js';

function getNote(sentence, notesList) {
  let requiredNoteInfo = notesList.filter((noteObj) => {
    console.log('noteObj in getNote is', noteObj, noteObj[sentence]);
    return noteObj[sentence] !== undefined;
  });

  console.log('Required Note Info is >>>>>>>>>>>>', requiredNoteInfo);
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
  let [issubmitDone, setSubmitActionValue] = useState(false);

  useEffect(() => {
    setEditMode(false);
  }, [props.selectedText]);

  useEffect(() => {
    setSubmitActionValue(false);
  }, [props.selectedText]);

  let selectedText = props.selectedText;
  let noteList = props.notesList;

  let noteInfo = getNote(selectedText, noteList);
  console.log('noteInfo is >>>>>>', noteInfo);
  if (!isEditMode) {
    userNote = noteInfo.note;
  }

  let updateTextAreaValueHandler = (event) => {
    let enteredText = event.target.value;
    setUserNote(enteredText);
    setEditMode(true);
  };

  let updateUserNote = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      setSubmitActionValue(true);
      console.log('Inside updateUserNote', noteInfo, selectedText);
      if (noteInfo.note !== '' && noteInfo.note !== undefined) {
        console.log(
          'Inside update CASE',
          noteInfo.note,
          selectedText,
          userNote,
          event.target.value
        );
        props.updateNote({ note: event.target.value, sentence: selectedText });
      } else {
        console.log('Inside Add CASE', noteInfo.note, selectedText);
        props.storeNote({ note: userNote, sentence: selectedText });
      }
      //highlighter(selectedText);
    }
  };
  let textAreaElement = (
    <textarea
      value={userNote}
      style={{ width: '200px', height: '200px' }}
      name="usernote"
      onChange={updateTextAreaValueHandler}
      onKeyDown={updateUserNote}
      autoFocus
    />
  );
  return (
    <div>
      <div> Selected Text:{selectedText} </div>
      <div>
        {' '}
        Note For Selected Text:{' '}
        {issubmitDone === true ? userNote : textAreaElement}
        <br />
      </div>
    </div>
  );
}

export default ShowUserWrittenNotes;
