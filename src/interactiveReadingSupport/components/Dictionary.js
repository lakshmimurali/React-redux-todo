import React, { useState, useEffect } from 'react';

import getNote from './noteHelper.js';

function ShowMeaningForWord(props) {
  let [noteStatus, setNoteAddStatus] = useState('');
  useEffect(() => {
    noteStatus = '';
  }, [props.selectedText]);

  let selectedText = props.selectedText;
  let meaningInfo = props.meaningObj[selectedText];
  let meaning = '';
  let exampleSentence = '';
  if (meaningInfo !== undefined) {
    meaning = meaningInfo.meaning;
    exampleSentence = meaningInfo.exampleSentence;
  }
  if (noteStatus === 'loading') {
    let noteInfo = getNote(selectedText, props.notesList);
    if (noteInfo.note !== '') {
      setNoteAddStatus('added');
    }
  }
  //console.log('In Dictionary Component', meaning);
  let addAsNoteHandler = () => {
    setNoteAddStatus('loading');
    let noteInfo = getNote(selectedText, props.notesList);

    if (noteInfo.note !== '' && noteInfo.note !== undefined) {
      props.updateNote({
        note:
          meaning !== 'Not Available'
            ? meaning
            : exampleSentence !== 'Not Available'
            ? exampleSentence
            : 'Not Available',
        sentence: selectedText,
      });
    } else {
      props.storeNote({
        note:
          meaning !== 'Not Available'
            ? meaning
            : exampleSentence !== 'Not Available'
            ? exampleSentence
            : 'Not Available',
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
        Meaning For Selected Text:{' '}
        {meaning !== undefined && meaning !== '' ? meaning : 'Loading...'}
        <br />
        Example Sentence for Selected Text:
        {exampleSentence !== undefined && exampleSentence !== ''
          ? exampleSentence
          : 'Loading...'}
      </div>
      {meaning === 'Not Avaialble' && sentence === 'Not Available' ? null : (
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

export default ShowMeaningForWord;
