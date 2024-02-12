const initialStateForSelectedTextReducer = { selectedText: '' };

const selectedTextReducer = (
  state = initialStateForSelectedTextReducer,
  action
) => {
  let selectedWord = action.text;
  return { ...state, selectedText: selectedWord };
};

export default selectedTextReducer;
