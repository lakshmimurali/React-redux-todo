const initialStateForSelectedTextReducer = { selectedText: '' };

const selectedTextReducer = (
  state = initialStateForSelectedTextReducer,
  action
) => {
  let selectedWord = 'Hello';
  return { selectedText: selectedWord };
};

export default selectedTextReducer;
