import React, { useState, useEffect } from 'react';
import getParentElementOfSelectedText from '../containers/helperToGetSelectedElementParent.js';

const InteractiveReader = (props) => {
  const selectedText = props.selectedText;
  let [showIRETools, setStateForIRETools] = useState(true);
  let [selAction, setAction] = useState('');

  console.log('Inside Tool Component', selectedText, showIRETools);
  useEffect(() => {
    setStateForIRETools(true);
  }, [selectedText]);

  useEffect(() => {
    setAction('');
  }, [selectedText]);

  let actionHandler = (event) => {
    console.log('Clicked Element', event.target.value);
    setAction(event.target.value);
    if (
      event.target.value === 'meaning' &&
      (props.meaningObj[selectedText] === undefined ||
        props.meaningObj[selectedText] === '')
    ) {
      return props.invokeServerFetch(selectedText);
    }
    if (
      event.target.value === 'pronounciation' &&
      (props.urlList[selectedText] === undefined ||
        props.urlList[selectedText] === '')
    ) {
      console.log('Inside pronounciation ');
      return props.invokeServerFetchForPronounciation(selectedText);
    }
    if (event.target.value === 'highlight' && selectedText.length > 0) {
      console.log('Inside highlight ');
      let selectedElemParent = getParentElementOfSelectedText();
      let refOfElement = selectedElemParent.getAttribute('extref');
      console.log('selectedElemParent is', selectedElemParent);
      console.log('refOfElement is', refOfElement);
      return props.invokeHighlightTextAction({
        toDoId: refOfElement,
        selectedWord: selectedText,
      });
    }
  };

  let hideAction = () => {
    setStateForIRETools(false);
  };
  console.log('selAction is', selAction);
  if (showIRETools) {
    return (
      <div>
        <p>
          <button value="meaning" key="1" onClick={actionHandler}>
            Check Meaning
          </button>
          <button value="pronounciation" key="2" onClick={actionHandler}>
            Pronounce It.. Plz..
          </button>
          <button value="notes" key="3" onClick={actionHandler}>
            Add Note
          </button>
          <button value="highlight" key="4" onClick={actionHandler}>
            Highlight Text
          </button>
          <button value="hidetools" key="5" onClick={hideAction}>
            Cancel
          </button>
        </p>
        <div>{selAction === 'meaning' ? props.Meaningrenderer : null}</div>
        <div>
          {selAction === 'pronounciation' ? props.PronounciationRenderer : null}
        </div>
        <div>{selAction === 'notes' ? props.NotesRenderer : null}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default InteractiveReader;
