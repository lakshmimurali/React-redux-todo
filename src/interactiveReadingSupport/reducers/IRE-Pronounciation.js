const initialStateForPronounciationReducer = { urls: {} };
const pronounciationReducer = (
  state = initialStateForPronounciationReducer,
  action
) => {
  let actionType = action.type;

  if (actionType === 'please-store-the-pronounciation') {
    let selectedWord = action.selectedWord;
    let audioList = state.urls;
    console.log('before detailsForGivenWord is >>>>>>>');
    let detailsForGivenWord = audioList[selectedWord];
    console.log('detailsForGivenWord is >>>>>>>', detailsForGivenWord);
    if (detailsForGivenWord !== undefined) {
      console.log('inside existing case', detailsForGivenWord);
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
