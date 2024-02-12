import React, { useState, useEffect } from 'react';

const InteractiveReader = (props) => {
  return (
    <div>
      <p>
        <button
          value="Meaning"
          key="1"
          onClick={(selectedText) => {
            props.invokeMeaning(selectedText);
          }}
        >
          Check Meaning
        </button>
        <button
          value="Pronounciation"
          key="2"
          onClick={(selectedText) => {
            props.invokePronounciation(selectedText);
          }}
        >
          Pronounce It.. Plz..
        </button>
        <button
          value="addnote"
          key="3"
          onClick={(selectedText) => {
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
