import React from 'react';

function ShowMeaningForWord(props) {
  let selectedText = props.selectedText;
  let meaningInfo = props.meaningObj[selectedText];
  let meaning = '';
  let exampleSentence = '';
  if (meaningInfo !== undefined) {
    meaning = meaningInfo.meaning;
    exampleSentence = meaningInfo.exampleSentence;
  }
  //console.log('In Dictionary Component', meaning);

  return (
    <div>
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
    </div>
  );
}

export default ShowMeaningForWord;
