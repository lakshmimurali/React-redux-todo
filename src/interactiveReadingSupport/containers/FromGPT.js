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

  const fetchMeaning = async (word) => {
    // Replace this with an actual dictionary API call
    // For example, you can use the WordAPI (https://www.wordsapi.com/docs/#get-word)
    const response = await fetch(`https://api.example.com/dictionary/${word}`);
    const data = await response.json();
    setMeaning(data.definition);
  };

  const fetchPronunciation = async (word) => {
    // Replace this with an actual text-to-speech API call
    // For example, you can use the ResponsiveVoice API (https://responsivevoice.org/api/)
    const response = await fetch(`https://api.example.com/pronunciation/${word}`);
    const data = await response.json();
    setPronunciation(data.audioUrl);
  };

  return (
    <div>
      <p>{/* Your blog content goes here */}</p>
      {selectedText && (
        <div className="context-menu">
          <button onClick={() => alert(`Meaning: ${meaning}`)}>Find Meaning</button>
          <button onClick={() => playAudio(pronunciation)}>Pronounce</button>
          {/* Add more interactive options */}
        </div>
      )}
    </div>
  );
};

const playAudio = (audioUrl) => {
  const audio = new Audio(audioUrl);
  audio.play();
};

export default InteractiveReader;
