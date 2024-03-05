import React from 'react';
import ShowUserWrittenNote from './DisplayUserNote.js';

function DisplayAllNotes(props) {
  let noteList = props.notesList;

  let noteListElement = noteList.map((noteObj) => {
    let noteInfo = Object.values(noteObj).pop();
    console.log('noteInfo Obj in List Comp  is', noteInfo);
    return (
      <ShowUserWrittenNote
        selectedText={noteInfo.name}
        note={noteInfo.note}
        updateNote={props.updateNote}
        editMode={false}
      />
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
