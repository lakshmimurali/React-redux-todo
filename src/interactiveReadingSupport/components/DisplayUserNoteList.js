import React from 'react';

function DisplayAllNotes(props) {
  let noteList = props.notesList;

  let editHandler = (sentence) => {
    props.deleteNote(sentence);
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
              return editHandler(noteInfo.name);
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
