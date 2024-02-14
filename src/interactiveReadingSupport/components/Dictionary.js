import React from 'react';

function ShowMeaningForWord(props) {
  console.log('In Dictionary Component', props.meaning);

  return (
    <div>
      <div> Selected Text:{props.selectedText} </div>
      <div>
        {' '}
        Meaning For Selected Text:{' '}
        {props.meaning !== undefined && props.meaning !== ''
          ? props.meaning
          : 'Loading...'}
      </div>
    </div>
  );
}

export default ShowMeaningForWord;
