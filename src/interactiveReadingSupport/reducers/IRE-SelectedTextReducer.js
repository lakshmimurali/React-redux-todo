const initialStateForSelectedTextReducer = '0000';

const selectedTextReducer = (state = 'notselected', action) => {
  return action.text || initialStateForSelectedTextReducer;
};

export default selectedTextReducer;
