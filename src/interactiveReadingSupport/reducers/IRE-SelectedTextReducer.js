const initialStateForSelectedTextReducer = { selectedText: '' };

const selectedTextReducer = (state = 'notselected', action) => {
  state = action.text || 'Hello';
  return state;
};

export default selectedTextReducer;
