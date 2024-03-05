import React from 'react';
import ShowUserWrittenNote from './DisplayUserNote.js';

function DisplayAllNotes(props) {
  let noteList = props.notesList;
  console.log('noteList is', noteList);

  let noteListElement = noteList.map((noteObj) => {
    let noteInfo = Object.values(noteObj).pop();
    console.log('noteInfo Obj in List Comp  is', noteInfo);
    return (
      <>
        <ShowUserWrittenNote
          selectedText={noteInfo.name}
          note={noteInfo.note}
          notesList={noteList}
          updateNote={props.updateNote}
          deleteNote={props.deleteNote}
          editMode={false}
          fromListView={true}
          key={noteInfo.name}
        />
        <hr />
      </>
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
