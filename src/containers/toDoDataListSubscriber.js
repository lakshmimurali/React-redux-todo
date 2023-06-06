import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import constructToggleToDoPayLoad from '../actions/toggleToDo.js';

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
export default connect(mapStateToProps, mapDispatchToprops)(TodoList);
