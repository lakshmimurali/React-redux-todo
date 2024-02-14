import React from 'react';

function ShowMeaningForWord(props) {
  let meaningInfo = props.meaningObj[props.selectedText];
  let meaning = '';
  if (meaningInfo !== 'undefined') {
    meaning = meaningInfo.meaning;
  }
  console.log('In Dictionary Component', meaning);

  return (
    <div>
      <div> Selected Text:{props.selectedText} </div>
      <div>
        {' '}
        Meaning For Selected Text:{' '}
        {meaning !== undefined && meaning !== '' ? meaning : 'Loading...'}
      </div>
    </div>
  );
}

export default ShowMeaningForWord;
