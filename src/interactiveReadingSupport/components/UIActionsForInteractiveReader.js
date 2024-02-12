import React from 'react';

const InteractiveReader = (props) => {
  const selectedText = props.selectedText;
  return (
    <div>
      <p>
        <button
          value="Meaning"
          key="1"
          onClick={() => {
            props.invokeMeaning(selectedText);
          }}
        >
          Check Meaning
        </button>
        <button
          value="Pronounciation"
          key="2"
          onClick={() => {
            props.invokePronounciation(selectedText);
          }}
        >
          Pronounce It.. Plz..
        </button>
        <button
          value="addnote"
          key="3"
          onClick={() => {
            props.invokeAddNotes(selectedText);
          }}
        >
          Add Note
        </button>
      </p>
    </div>
  );
};

export default InteractiveReader;
