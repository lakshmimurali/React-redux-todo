const initialStateForPronounciationReducer = { urls: {} };
const pronounciationReducer = (
  state = initialStateForPronounciationReducer,
  action
) => {
  let actionType = action.type;
  let selectedWord = action.selectedWord;
  if (actionType === 'please-tell-the-pronounciation') {
    let urlsList = state.urls;
    let selectedWord = action.selectedWord;

    let detailsForGivenWord = meaningList[selectedWord];
    if (detailsForGivenWord !== undefined) {
      return detailsForGivenWord;
    } else {
      return {
        ...state,
        urls: {
          ...state.urls,
          [selectedWord]: {
            url: 'Not Available',
            language: 'Not Available',
            name: selectedWord,
          },
        },
      };
    }
  }
  if (actionType === 'please-store-the-meaning') {
    let url = action.url;
    let language = action.language;
    return {
      ...state,
      urls: {
        ...state.urls,
        [selectedWord]: {
          url: url,
          language: language,
          name: selectedWord,
        },
      },
    };
  }
  return state;
};

export default pronounciationReducer;
