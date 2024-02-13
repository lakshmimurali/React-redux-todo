import React, { useState } from 'react';

function ShowMeaningForWord(props) {
  let [meaningForSelectedText, setMeaning] = useState('Loading...');
  let meaningInfoExists = props.meaningObj !== undefined;
  console.log(meaningInfoExists, props.meaningObj);
  if (meaningInfoExists) {
    setMeaning(props.meaningObj.meaning, props.selectedText);
  } else {
    //props.serverAction(props.selectedText);
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
