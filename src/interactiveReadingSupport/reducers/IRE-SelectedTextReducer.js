const initialStateForSelectedTextReducer = { textValue: '0000' };

const selectedTextReducer = (
  state = initialStateForSelectedTextReducer,
  action
) => {
  let updatedText = action.text || state.textValue;
  console.log('Inside selectedTextReducer >>>>>>>>', updatedText);
  //return action.text || state;
  return { textValue: updatedText };
};

export default selectedTextReducer;
