import React, { useState } from 'react';

const InteractiveReader = (props) => {
  const selectedText = props.selectedText;
  let [showIRETools, setStateForIRETools] = useState(true);
  let [selAction, setAction] = useState('');
  console.log(
    'Inside Interactive Reader Components',
    selectedText,
    showIRETools
  );
  if (showIRETools) {
    return (
      <div>
        <p>
          <button
            value="meaning"
            key="1"
            onClick={() => {
              // props.notifyParent('meaning');
              setAction('meaning');
            }}
          >
            Check Meaning
          </button>
          <button
            value="pronounciation"
            key="2"
            onClick={() => {
              // props.notifyParent('pronounciation');
            }}
          >
            Pronounce It.. Plz..
          </button>
          <button
            value="addnote"
            key="3"
            onClick={() => {
              //props.notifyParent('notes');
            }}
          >
            Add Note
          </button>
          <button
            value="hidetools"
            key="4"
            onClick={() => {
              setStateForIRETools(false);
            }}
          >
            Cancel
          </button>
        </p>
        <div>{selAction === 'meaning' ? props.Meaningrenderer : null}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default InteractiveReader;
