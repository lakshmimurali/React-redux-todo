import React, { useState, useEffect } from 'react';

function ShowMeaningForWord(props) {
  let [meaningForSelectedText, setMeaning] = useState('Loading...');

  /*console.log(
    'In Dictionary Component',
    meaningInfoExists,
    props.meaningInfo,
    props.selectedText
  );*/

  console.log('In Dictionary Component', props.meaning);

  if (props.meaning !== undefined) {
    //console.log('props.meaningInfo.meaning', props.meaningInfo.meaning);
    setMeaning(props.meaning);
  }

  return (
    <div>
      <div> Selected Text:{props.selectedText} </div>
      <div> Meaning For Selected Text: {props.meaning}</div>
    </div>
  );
}

export default ShowMeaningForWord;
