const initialStateForMeaningsReducer = { synonyms: {} };

const meaningsReducer = (state = initialStateForMeaningsReducer, action) => {
  // can think of supporting different type of actions for getting new meaning, retrying meaning for unavailable case, etc...

  let actionType = action.type;

  if (actionType === 'please-store-the-meaning') {
    let selectedWord = action.selectedWord;
    let meaningList = state.synonyms;
    let detailsForGivenWord = meaningList[selectedWord];
    if (detailsForGivenWord !== undefined) {
      return state;
    }
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
