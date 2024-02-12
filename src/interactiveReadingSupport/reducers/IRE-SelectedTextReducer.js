const initialStateForSelectedTextReducer = { selectedText: '' };

const selectedTextReducer = (
  state = initialStateForSelectedTextReducer,
  action
) => {
  let selectedWord = action.selectedText;
  return { ...state, selectedText: selectedWord };
};

export default initialStateForSelectedTextReducer;
