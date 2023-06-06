import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import constructToggleToDoPayLoad from '../actions/toggleToDo.js';

function SubscribeToDoList(props) {
  console.log('Inside ConnectToDoList>>>>', props);
  return (
    <TodoList
      invokeToggleToDoActionCreator={props.invokeToggleToDoActionCreator}
      toDoListFromStore={props.toDoListFromStore}
      selectedView={props.selectedView.selectedView}
    />
  );
}

let mapStateToProps = (state, ownProps) => {
  console.log(state.toDos, state.selectedView);
  return { toDoListFromStore: state.toDos, selectedView: state.selectedView };
};

let mapDispatchToprops = (dispatch, ownProps) => {
  return {
    invokeToggleToDoActionCreator: (toDoId) => {
      dispatch(constructToggleToDoPayLoad(toDoId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(SubscribeToDoList);
