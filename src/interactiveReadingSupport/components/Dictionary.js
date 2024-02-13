import React, { useState, useEffect } from 'react';

function ShowMeaningForWord(props) {
  let [meaningForSelectedText, setMeaning] = useState('Loading...');

  let meaningInfoExists = props.meaningInfo !== undefined;

  console.log(
    'In Dictionary Component',
    meaningInfoExists,
    props.meaningInfo,
    props.selectedText
  );

  if (meaningInfoExists) {
    //console.log('props.meaningInfo.meaning', props.meaningInfo.meaning);
    setMeaning(props.meaningInfo.meaning);
  }

  return (
    <div>
      <div> Selected Text:{props.selectedText} </div>
      <div> Meaning For Selected Text: {meaningForSelectedText}</div>
    </div>
  );
}

export default ShowMeaningForWord;
