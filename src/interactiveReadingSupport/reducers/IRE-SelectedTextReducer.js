const initialStateForSelectedTextReducer = '0000';

const selectedTextReducer = (
  state = initialStateForSelectedTextReducer,
  action
) => {
  return action.text || state;
};

export default selectedTextReducer;
