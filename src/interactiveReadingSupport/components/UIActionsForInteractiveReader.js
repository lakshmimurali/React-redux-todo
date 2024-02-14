import React, { useState, useEffect } from 'react';

const InteractiveReader = (props) => {
  const selectedText = props.selectedText;
  let [showIRETools, setStateForIRETools] = useState(true);

  console.log('Inside Tool Component', selectedText, showIRETools);
  useEffect(() => {
    setStateForIRETools(true);
  }, [selectedText]);

  /*useEffect(() => {
    setAction('');
  }, [selectedText]);
*/
  let meaningsInvokeHandler = () => {
    return props.invokeServerFetch(selectedText);
  };

  let hideAction = () => {
    setStateForIRETools(false);
  };
  if (showIRETools) {
    return (
      <div>
        <p>
          <button value="meaning" key="1" onClick={meaningsInvokeHandler}>
            Check Meaning
          </button>
          <button value="pronounciation" key="2">
            Pronounce It.. Plz..
          </button>
          <button value="addnote" key="3">
            Add Note
          </button>
          <button value="hidetools" key="4" onClick={hideAction}>
            Cancel
          </button>
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default InteractiveReader;
