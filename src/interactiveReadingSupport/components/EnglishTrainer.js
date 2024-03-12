import React, { useState, useEffect } from 'react';
import getNote from './noteHelper.js';

function ShowProuniciationAudioForGivenWord(props) {
  let [noteStatus, setNoteAddStatus] = useState('');
  useEffect(() => {
    noteStatus = '';
  }, [props.selectedText]);

  let selectedText = props.selectedText;
  let pronounciationInfo = props.urlList[selectedText];
  let pronounciationUrl = '';
  let phonetic = '';
  let audioElement = '';
  if (pronounciationInfo !== undefined) {
    pronounciationUrl = pronounciationInfo.audioUrl;
    phonetic = pronounciationInfo.phonetic;
    audioElement = (
      <audio controls autoPlay name="media">
        <source src={pronounciationUrl} type="audio/mpeg" />
      </audio>
    );
  }
  console.log(
    'In  Pronounciation Component',
    pronounciationUrl,
    pronounciationInfo
  );

  if (noteStatus === 'loading') {
    let noteInfo = getNote(selectedText, props.notesList);
    if (noteInfo.note !== '') {
      setNoteAddStatus('added');
    }
  }

  let addAsNoteHandler = () => {
    setNoteAddStatus('loading');
    let noteInfo = getNote(selectedText, props.notesList);

    if (noteInfo.note !== '' && noteInfo.note !== undefined) {
      props.updateNote({
        note: phonetic,
        sentence: selectedText,
      });
    } else {
      props.storeNote({
        note: phonetic,
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
        Pronounciation Details For Selected Text:{' '}
        {pronounciationUrl !== undefined && pronounciationUrl !== ''
          ? audioElement
          : 'Loading...'}
        <br />
        Phonetic for Selected Text:
        {phonetic !== undefined && phonetic !== '' ? phonetic : 'Loading...'}
      </div>

      {phonetic === 'Not Avaialble' ? null : (
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

export default ShowProuniciationAudioForGivenWord;
