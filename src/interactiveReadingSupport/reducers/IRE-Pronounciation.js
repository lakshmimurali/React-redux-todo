const initialStateForPronounciationReducer = { urls: {} };
const pronounciationReducer = (
  state = initialStateForPronounciationReducer,
  action
) => {
  let actionType = action.type;

  if (actionType === 'please-store-the-pronounciation') {
    let audioList = state.urls;
    let detailsForGivenWord = audioList[selectedWord];
    if (detailsForGivenWord !== undefined) {
      return state;
    }
    let audioUrl = action.audioUrl;
    let phonetic = action.phonetic;
    return {
      ...state,
      urls: {
        ...state.urls,
        [selectedWord]: {
          audioUrl: audioUrl,
          phonetic: phonetic,
          name: selectedWord,
        },
      },
    };
  }
  return state;
};

export default pronounciationReducer;
