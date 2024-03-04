import React from 'react';
import ShowUserWrittenNote from './DisplayUserNote.js';

function DisplayAllNotes(props) {
  let noteList = props.notesList;

  let deleteHandler = (sentence) => {
    props.deleteNote(sentence);
  };

  let editHandler = () => {
    console.log('Inside Edit Handler', props);
    return (
      <ShowUserWrittenNote
        selectedText={props.selectedText}
        notesList={props.notesList}
        updateNote={props.updateNote}
      />
    );
  };

  let noteListElement = noteList.map((noteObj) => {
    let noteInfo = Object.values(noteObj).pop();
    console.log('noteInfo Obj is', noteInfo);
    return (
      <div key={noteInfo.name}>
        <div> Selected Text:{noteInfo.name} </div>
        <div>
          {' '}
          Note For Selected Text: {noteInfo.note}{' '}
          <span
            className="pointer"
            onClick={() => {
              return editHandler();
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
    </div>
  );
}

export default DisplayAllNotes;
