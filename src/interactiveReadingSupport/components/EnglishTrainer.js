import React, { useState } from 'react';

function ShowProuniciationAudioForGivenWord(props) {
  let selectedText = props.selectedText;
  let pronounciationInfo = props.urlList[selectedText];
  let pronounciationUrl = '';
  let phonetic = '';
  let audioElement = '';
  if (pronounciationInfo !== undefined) {
    pronounciationUrl = pronounciationInfo.audioUrl;
    phonetic = pronounciationInfo.phonetic;
    audioElement = <audio src={pronounciationUrl}></audio>;
  }
  console.log(
    'In  Pronounciation Component',
    pronounciationUrl,
    pronounciationUrl
  );

  return (
    <div>
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
    </div>
  );
}

export default ShowProuniciationAudioForGivenWord;
