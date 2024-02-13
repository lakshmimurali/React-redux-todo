const initialStateForCurrentAction = null;

const currentActionReducer = (state = initialStateForCurrentAction, action) => {
  return action.text || state;
};

export default currentActionReducer;
