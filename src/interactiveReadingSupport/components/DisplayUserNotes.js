import React from 'react';

function getNote(sentence, notesList) {
  let requiredNoteInfo = notesList.filter((noteObj) => {
    return noteObj[sentence] !== undefined;
  });
  return requiredNoteInfo;
}
function ShowUserWrittenNotes(props) {
  let selectedText = props.selectedText;
  let noteList = props.notesList;
  let note = '';
  if (noteInfo !== undefined) {
    note = getNote(selectedText, noteList);
  }
  return (
    <div>
      <div> Selected Text:{selectedText} </div>
      <div>
        {' '}
        Note For Selected Text:{' '}
        {note !== undefined && note !== '' ? note : 'Loading...'}
        <br />
      </div>
    </div>
  );
}

export default ShowUserWrittenNotes;
