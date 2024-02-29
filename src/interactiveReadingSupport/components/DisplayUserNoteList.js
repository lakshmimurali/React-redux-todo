import React from 'react';

function DisplayAllNotes(props) {
  let noteList = props.notesList;

  let noteListElement = noteList.map((noteObj) => {
    let noteInfo = Object.values(noteObj).pop();
    console.log('noteInfo Obj is', noteInfo);
    return (
      <div key={noteInfo.name}>
        <div> Selected Text:{noteInfo.name} </div>
        <div>
          {' '}
          Note For Selected Text: {noteInfo.note}
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

/*myArr.map((person)=>{
  let values = Object.values(person).pop();
  console.log(values);
  console.log(values.age);
  console.log(values.mom);
})*/
