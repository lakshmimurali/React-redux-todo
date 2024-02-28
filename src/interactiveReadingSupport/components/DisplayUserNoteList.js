import React, { useState, useEffect } from 'react';

function displayAllNotes(props) {
  let noteList = props.notesList;

  let noteListElement = noteList.map((noteObj) => {
    let selectedWord = Object.keys(noteObj);
    return (
      <div>
        <div> Selected Text:{noteObj.selectedText} </div>
        <div>
          {' '}
          Note For Selected Text: {noteObj.userNote}
          <br />
        </div>
      </div>
    );
  });

  return noteListElement;
}

export default displayAllNotes;

/*myArr.map((person)=>{
  let values = Object.values(person).pop();
  console.log(values);
  console.log(values.age);
  console.log(values.mom);
})*/
