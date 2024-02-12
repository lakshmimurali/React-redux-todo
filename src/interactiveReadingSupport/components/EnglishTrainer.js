function EnglishTrainer(props) {
  let [fetchData, setFetchData] = useState(false);
  let audioURLForSelectedText = props.pronounciationObj.url;
  if (audioURLForSelectedText !== 'Not Available') {
    setFetchData(true);
  } else {
    props.serverAction(audioURLForSelectedText);
  }

  return (
    <p>
      <div> Selected Text:{props.selectedText} </div>
      <div>
        {' '}
        Audio For Selected Text:{' '}
        {fetchData === false ? 'Loading ...' : audioURLForSelectedText}
      </div>
    </p>
  );
}
