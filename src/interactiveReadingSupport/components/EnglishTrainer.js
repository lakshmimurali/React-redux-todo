import React, { useState } from 'react';

function ShowProuniciationAudioForGivenWord(props) {
  let [fetchData, setFetchData] = useState(false);
  let audioURLForSelectedText = props.pronounciationObj.url;
  if (audioURLForSelectedText !== 'Not Available') {
    setFetchData(true);
  } else {
    props.serverAction(audioURLForSelectedText);
  }

  return (
    <div>
      <div> Selected Text:{props.selectedText} </div>
      <div>
        {' '}
        Audio For Selected Text:{' '}
        {fetchData === false ? 'Loading ...' : audioURLForSelectedText}
      </div>
    </div>
  );
}

export default ShowProuniciationAudioForGivenWord;
