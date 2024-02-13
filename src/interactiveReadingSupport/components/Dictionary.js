import React, { useState } from 'react';

function ShowMeaningForWord(props) {
  let [meaningForSelectedText, setMeaning] = useState('Loading...');

  let meaningInfoExists = props.meaningInfo !== undefined;

  console.log(meaningInfoExists, props.meaningInfo, props.selectedText);

  if (meaningInfoExists) {
    setMeaning(props.meaningInfo.meaning);
  } else {
    props.serverAction(props.selectedText);
    props.updateCurrentSelectedText('0000');
    //props.updateCurrentIREAction('meaning');
  }

  return (
    <div>
      <div> Selected Text:{props.selectedText} </div>
      <div> Meaning For Selected Text: {meaningForSelectedText}</div>
    </div>
  );
}

export default ShowMeaningForWord;
