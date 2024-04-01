import React, { useState, useEffect } from 'react';
import getParentElementOfSelectedText from '../../domelementutils/helperToGetSelectedElementParent.js';

const InteractiveReader = (props) => {
  const selectedText = props.selectedText;
  let [showIRETools, setStateForIRETools] = useState(true);
  let [selAction, setAction] = useState('none');
  // Expectation updates state for selAction to reset and showIRETools to false
  let hideAction = () => {
    setAction('reset');
    console.log('Inside Hide Action');
    setStateForIRETools(false);
    //props.invokeActionCreatorForUpdatingSelectedText('0000');
  };

  console.log('Inside Tool Component', selectedText, showIRETools,selAction);
  
  useEffect(() => {
    console.log('Inside showIRETools effect');
    
    setStateForIRETools(true);
  }, [selectedText]);
  
  /* Expectation = runs only one time during onload. 
  Result =  */
  useEffect(() => {
    if(selAction === 'none' && showIRETools === true)
    {
      console.log('Inside Page Load Event >>>>>>>', selAction);
      if(window.getSelection().toString() === "" )
      {
        setStateForIRETools(false);
      }
    
    }
  },[]);

  useEffect(() => {
    console.log('Inside showIRETools effect');
    setAction('reset');
  }, [selectedText]);


  let actionHandler = (event) => {
    console.log('Clicked Element', event.target.value);
    setAction(event.target.value);
    setStateForIRETools(true);
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
    if (
      event.target.value === 'abbreviation' &&
      (props.abbrList[selectedText] === undefined ||
        props.abbrList[selectedText] === '')
    ) {
      console.log('Inside  Abbreviation Server Fetch Action Invoking Part ');
      return props.invokeServerFetchForAbbreviation(selectedText);
    }

    if (event.target.value === 'highlight') {
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

  
  
  if (showIRETools ) {
    return (
      <div className="not-selectable">
        <p>
          <button value="meaning" key="1" onClick={actionHandler}>
            Check Meaning.
          </button>
          <button value="pronounciation" key="2" onClick={actionHandler}>
            Pronounce It.. Plz..
          </button>
          <button value="note" key="3" onClick={actionHandler}>
            Add Note.
          </button>

          <br />
          <button value="highlight" key="4" onClick={actionHandler}>
            Highlight Text.
          </button>
          <button value="abbreviation" key="5" onClick={actionHandler}>
            Show Abbreviation.
          </button>
          <button value="displayallnotes" key="7" onClick={actionHandler}>
            Display Notes.
          </button>

          <button value="hidetools" key="6" onClick={hideAction}>
            Cancel
          </button>
        </p>
        <div>{selAction === 'meaning' ? props.Meaningrenderer : null}</div>
        <div>
          {selAction === 'pronounciation' ? props.PronounciationRenderer : null}
        </div>
        <div>
          {selAction === 'abbreviation' ? props.AbbreviationRenderer : null}
        </div>
        <div>{selAction === 'note' ? props.NoteRenderer : null}</div>
        <div>
          {selAction === 'displayallnotes' ? props.AllNotesRenderer : null}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default InteractiveReader;
