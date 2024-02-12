const initialStateForSelectedTextReducer = { selectedText: '' };

const selectedTextReducer = (
  state = initialStateForSelectedTextReducer,
  action
) => {
  let selectedWord = action.text;
  return { selectedText: selectedWord };
};

export default selectedTextReducer;
