const initialStateForSelectedTextReducer = '0000';

const selectedTextReducer = (
  state = initialStateForSelectedTextReducer,
  action
) => {
  let textValue = action.text || state;
  console.log('inside  selectedTextReducer', textValue,state );
  return textValue;
  
};

export default selectedTextReducer;
