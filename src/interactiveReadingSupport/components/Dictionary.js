import React from 'react';

function ShowMeaningForWord(props) {
  let meaning = props.meaningObj[props.selectedText].meaning;
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
