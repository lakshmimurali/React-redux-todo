import React, { useState, useEffect } from 'react';

function ShowMeaningForWord(props) {
  let [meaningForSelectedText, setMeaning] = useState('Loading...');

  let meaningInfoExists = props.meaningInfo !== undefined;

  console.log(meaningInfoExists, props.meaningInfo, props.selectedText);

  if (meaningInfoExists) {
    //console.log('props.meaningInfo.meaning', props.meaningInfo.meaning);
    setMeaning(props.meaningInfo.meaning);
  } else {
    /*props.serverAction(props.selectedText);
    props.updateCurrentSelectedText('0000');
    props.updateCurrentIREAction('meaning'); */
  }

  useEffect(() => {
    //props.invokelocalFetch(props.selectedText);
    props.serverAction(props.selectedText);
  }, [props.selectedText]);

  /*useEffect(() => {
    props.updateCurrentSelectedText('0000');
  }, [props.selectedText]); */

  return (
    <div>
      <div> Selected Text:{props.selectedText} </div>
      <div> Meaning For Selected Text: {meaningForSelectedText}</div>
      <button value="FetchMeaning"> Fetch Meaning</button>
    </div>
  );
}

export default ShowMeaningForWord;
