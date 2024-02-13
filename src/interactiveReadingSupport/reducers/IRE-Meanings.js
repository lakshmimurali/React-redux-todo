const initialStateForMeaningsReducer = { synonyms: {} };

const meaningsReducer = (state = initialStateForMeaningsReducer, action) => {
  // can think of supporting different type of actions for getting new meaning, retrying meaning for unavailable case, etc...

  let actionType = action.type;
  let selectedWord = action.selectedWord;
  if (actionType === 'please-tell-the-meaning') {
    //return initialStateForMeaningsReducer;
    let meaningList = state.synonyms;
    let detailsForGivenWord = meaningList[selectedWord];
    if (detailsForGivenWord !== undefined) {
      return detailsForGivenWord;
    } else {
      return {
        ...state,
        synonyms: {
          ...state.synonyms,
          [selectedWord]: {
            meaning: 'Not Available',
            exampleSentence: 'Not Available',
            name: selectedWord,
          },
        },
      };
    }
  }
  if (actionType === 'please-store-the-meaning') {
    // return initialStateForMeaningsReducer;
    let meaningOfWord = action.meaning;
    let sentence = action.exampleSentence;
    return {
      ...state,
      synonyms: {
        ...state.synonyms,
        [selectedWord]: {
          meaning: meaningOfWord,
          exampleSentence: sentence,
          name: selectedWord,
        },
      },
    };
  }
  return state;
};

export default meaningsReducer;
