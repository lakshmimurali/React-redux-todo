import React, { useState, useEffect } from 'react';

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

function ShowUserWrittenNote(props) {
  let selectedText = props.selectedText;
  let getEditValue = () => {
    let editMode = true;
    if (props.fromListView !== '' && props.fromListView !== undefined) {
      editMode = false;
    }
    return editMode;
  };
  let noteList = '';
  let noteInfo = '';

  let getNoteValue = () => {
    let savedNote = '';
    if (props.fromListView !== '' && props.fromListView !== undefined) {
      savedNote = props.note;
    }

    if (props.fromAddForm !== '' && props.fromAddForm !== undefined) {
      console.log('Inside >>> From Add case');
      noteList = props.notesList;
      noteInfo = getNote(selectedText, noteList);
      savedNote = noteInfo.note;
      console.log('savedNote is', savedNote);
    }
    return savedNote;
  };

  let [userNote, setUserNote] = useState(getNoteValue());
  let [isEditMode, setEditMode] = useState(getEditValue());

  useEffect(() => {
    setEditMode(getEditValue());
  }, [props.selectedText]);

  useEffect(() => {
    setUserNote(getNoteValue());
  }, [props.selectedText]);

  let deleteHandler = (sentence) => {
    props.deleteNote(sentence);
  };

  let editHandler = () => {
    setEditMode(true);
    return;
  };

  let updateTextAreaValueHandler = (event) => {
    let enteredText = event.target.value;
    setUserNote(enteredText);
    setEditMode(true);
  };

  let updateUserNote = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      setEditMode(false);
      console.log('Inside updateUserNote', userNote, selectedText);
      if (
        getNote(userNote, props.notesList).note !== '' &&
        getNote(userNote, props.notesList).note !== undefined
      ) {
        console.log(
          'Inside update CASE',
          userNote,
          selectedText,
          userNote,
          event.target.value
        );
        props.updateNote({ note: event.target.value, sentence: selectedText });
      } else {
        console.log('Inside Add CASE', userNote, selectedText);
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
      autoFocus
    />
  );
  return (
    <div key={selectedText}>
      <div> Selected Text:{selectedText} </div>
      <div>
        {' '}
        Note For Selected Text:{' '}
        {isEditMode === true ? textAreaElement : userNote}
        {isEditMode === false ? (
          <span>
            <span
              className="pointer"
              onClick={() => {
                return editHandler(selectedText);
              }}
            >
              &#x270E;
            </span>
            <span
              className="pointer"
              onClick={() => {
                return deleteHandler(selectedText);
              }}
            >
              &#x1F5D1;
            </span>
          </span>
        ) : null}
        <br />
      </div>
    </div>
  );
}

export default ShowUserWrittenNote;