import React, { useState, useEffect } from 'react';
import getNote from './noteHelper.js';

function ShowAbbreviationForAcronym(props) {
  let [noteStatus, setNoteAddStatus] = useState('');
  useEffect(() => {
    noteStatus = '';
  }, [props.selectedText]);

  let selectedText = props.selectedText;
  let abbrInfo = props.abbrList[selectedText];

  let abbreviation = '';
  let field = '';
  if (abbrInfo !== undefined) {
    abbreviation = abbrInfo.abbreviation;
    field = abbrInfo.field;
  }

  if (noteStatus === 'loading') {
    let noteInfo = getNote(selectedText, props.notesList);
    if (noteInfo.note !== '') {
      setNoteAddStatus('added');
    }
  }
  console.log('In Show AbbreviationForAcronym Component', abbreviation);

  let addAsNoteHandler = () => {
    setNoteAddStatus('loading');
    let noteInfo = getNote(selectedText, props.notesList);

    if (noteInfo.note !== '' && noteInfo.note !== undefined) {
      props.updateNote({
        note: abbreviation,
        sentence: selectedText,
      });
    } else {
      props.storeNote({
        note: abbreviation,
        sentence: selectedText,
      });
    }
  };

  return (
    <div className="not-selectable">
      {noteStatus === 'loading'
        ? 'Adding Notes...'
        : noteStatus === 'added'
        ? 'Note Added Successfully :)'
        : null}

      <div> Selected Text:{selectedText} </div>
      <div>
        {' '}
        Abbreviation For Selected Text:{' '}
        {abbreviation !== undefined && abbreviation !== ''
          ? abbreviation
          : 'Loading...'}
        <br />
        Category of Acronym:
        {field !== undefined && field !== '' ? field : 'Loading...'}
      </div>
      {abbreviation === 'Not Avaialble' ? null : (
        <button
          disabled={noteStatus === 'added' ? true : false}
          className="pointer"
          onClick={addAsNoteHandler}
        >
          {' '}
          Add as Note.{' '}
        </button>
      )}
    </div>
  );
}

export default ShowAbbreviationForAcronym;
