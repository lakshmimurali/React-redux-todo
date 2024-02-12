import React, { useState, useEffect } from 'react';

const InteractiveReader = () => {
  const [selectedText, setSelectedText] = useState(null);
  const [meaning, setMeaning] = useState(null);
  const [pronunciation, setPronunciation] = useState(null);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        const selectedWord = selection.toString();
        setSelectedText(selectedWord);
        fetchMeaning(selectedWord);
        fetchPronunciation(selectedWord);
      }
    };

    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);

  return (
    <div>
      <p>{/* Your blog content goes here */}</p>
      {selectedText && (
        <div className="context-menu">
          <button onClick={() => alert(`Meaning: ${meaning}`)}>
            Find Meaning
          </button>
          <button onClick={() => playAudio(pronunciation)}>Pronounce</button>
          {/* Add more interactive options */}
        </div>
      )}
    </div>
  );
};
