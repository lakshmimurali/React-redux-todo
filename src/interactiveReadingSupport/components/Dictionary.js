import React, { useState } from 'react';

function ShowMeaningForWord(props) {
  let [fetchData, setFetchData] = useState(false);
  let meaningInfoExists = props.meaningObj !== undefined;
  if (meaningInfoExists) {
    let meaningForSelectedText = props.meaningObj.meaning;
    setFetchData(true);
  } else {
    props.serverAction(props.selectedText);
    //props.invokelocalFetch(props.selectedText);
  }

  return (
    <div>
      <div> Selected Text:{props.selectedText} </div>
      <div>
        {' '}
        Meaning For Selected Text:{' '}
        {fetchData === false ? 'Getting Meaning ...' : meaningForSelectedText}
      </div>
    </div>
  );
}

export default ShowMeaningForWord;
