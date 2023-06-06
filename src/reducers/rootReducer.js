import { combineReducers } from 'redux';
import toDoItemsReducer from './toDoReducer.js';
import toDoFilterReducer from './toDoFilterReducer.js';

const rootReducer = combineReducers({
  toDos: toDoItemsReducer,
  selectedView: toDoFilterReducer,
});

export default rootReducer;
