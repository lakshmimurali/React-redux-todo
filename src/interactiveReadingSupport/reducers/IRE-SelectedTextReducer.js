const initialStateForSelectedTextReducer = '0000';

const selectedTextReducer = (
  state = initialStateForSelectedTextReducer,
  action
) => {
  let textValue = action.text || state;
  console.log('inside  selectedTextReducer', textValue,state );
  if(textValue === state)
  {
    console.log('Inside .... ')
    return textValue+" ";
  }
  else{
  return textValue;
  }
};

export default selectedTextReducer;
