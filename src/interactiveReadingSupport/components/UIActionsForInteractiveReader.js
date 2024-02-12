import React, { useState, useEffect } from 'react';

const InteractiveReader = (props) => {
  const [selectedText, setSelectedText] = useState(null);
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        const selectedWord = selection.toString();
        setSelectedText(selectedWord);
        props.actionCreatorForUpdatingSelectedText(selectedWord);
      }
    };

    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);

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
