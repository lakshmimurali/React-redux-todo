import React from 'react';
import { connect } from 'react-redux';
import ConstructAddToDoForm from '../components/constructAddToDoForm.js';
import constructAddToDoPayLoad from '../actions/addToDo.js';

/*let mapDispatchToprops = (dispatch, ownProps) => {
  console.log('Inside mapdispatchprops');
  return {
    invokeaddToDoActionCreator: (toDoValue) => {
      dispatch(constructAddToDoPayLoad(toDoValue));
    },
  };
};
export default connect(null, mapDispatchToprops)(ConstructAddToDoForm);*/

function addToDoActionCreator(dispatch) {
  return {
    invokeaddToDoActionCreator: (toDoValue) => {
      dispatch(constructAddToDoPayLoad(toDoValue));
    },
  };
}

function ConnectAddToDoForm({ dispatch }) {
  console.log('Inside ConnectAddToDoForm', dispatch);
  let addToDoActionCreatorAsProps = addToDoActionCreator(dispatch);
  return (
    <ConstructAddToDoForm
      addToDoActionCreatorAsProps={addToDoActionCreatorAsProps}
    />
  );
}
export default connect()(ConnectAddToDoForm);
