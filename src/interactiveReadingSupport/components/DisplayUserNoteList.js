import React, { useState, useEffect } from 'react';
import ShowUserWrittenNote from './DisplayUserNote.js';

function DisplayAllNotes(props) {
  let [displayNote, setValue] = useState(false);
  let [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    setValue(false);
  }, []);

  let noteList = props.notesList;

  let deleteHandler = (sentence) => {
    props.deleteNote(sentence);
  };

  let editHandler = (sentence) => {
    console.log('Inside Edit Handler', props, selectedText);
    setSelectedText(sentence);
    return;
  };

  let noteListElement = noteList.map((noteObj) => {
    let noteInfo = Object.values(noteObj).pop();
    console.log('noteInfo Obj in List Comp  is', noteInfo);
    return (
      <div key={noteInfo.name}>
        <div> Selected Text:{noteInfo.name} </div>
        <div>
          {' '}
          Note For Selected Text: {noteInfo.note}{' '}
          <span
            className="pointer"
            onClick={() => {
              setValue(true);
              return editHandler(noteInfo.name);
            }}
          >
            &#x270E;
          </span>
          <span
            className="pointer"
            onClick={() => {
              return deleteHandler(noteInfo.name);
            }}
          >
            &#x1F5D1;
          </span>
          <br />
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div>
      <p>NoteList:</p>
      {noteListElement}
      {displayNote === true ? (
        <ShowUserWrittenNote
          selectedText={selectedText}
          notesList={props.notesList}
          updateNote={props.updateNote}
        />
      ) : null}
    </div>
  );
}

export default DisplayAllNotes;
