import React, { useState } from 'react';

function ShowMeaningForWord(props) {
  let [fetchData, setFetchData] = useState(false);
  let meaningForSelectedText = props.meaningObj.meaning;
  if (meaningForSelectedText !== 'Not Available') {
    setFetchData(true);
  } else {
    props.serverAction(meaningForSelectedText);
  }

  return (
    <p>
      <div> Selected Text:{props.selectedText} </div>
      <div>
        {' '}
        Meaning For Selected Text:{' '}
        {fetchData === false ? 'Loading ...' : meaningForSelectedText}
      </div>
    </p>
  );
}

export default ShowMeaningForWord;
