import React, { useState, useEffect } from 'react';

function ShowMeaningForWord(props) {
  /*console.log(
    'In Dictionary Component',
    meaningInfoExists,
    props.meaningInfo,
    props.selectedText
  );*/

  console.log('In Dictionary Component', props.meaning, props.meaningInfo);

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
