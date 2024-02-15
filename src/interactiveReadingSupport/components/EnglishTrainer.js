import React, { useState } from 'react';

function ShowProuniciationAudioForGivenWord(props) {
  let selectedText = props.selectedText;
  let pronounciationInfo = props.urlList[selectedText];
  let pronounciationUrl = '';
  let phonetic = '';
  if (pronounciationInfo !== undefined) {
    pronounciationUrl = pronounciationInfo.audioUrl;
    phonetic = pronounciationInfo.phonetic;
  }
  //console.log('In Dictionary Component', meaning);

  return (
    <div>
      <div> Selected Text:{selectedText} </div>
      <div>
        {' '}
        Pronounciation Details For Selected Text:{' '}
        {pronounciationUrl !== undefined && pronounciationUrl !== ''
          ? pronounciationUrl
          : 'Loading...'}
        <br />
        Phonetic for Selected Text:
        {phonetic !== undefined && phonetic !== '' ? phonetic : 'Loading...'}
      </div>
    </div>
  );
}

export default ShowProuniciationAudioForGivenWord;
