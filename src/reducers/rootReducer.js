import { combineReducers } from 'redux';
import toDoItemsReducer from './toDoReducer.js';
import toDoFilterReducer from './toDoFilterReducer.js';
import meaningsReducer from './interactiveReadingSupport/reducers/IRE-Meanings.js';
import pronounciationReducer from './interactiveReadingSupport/reducers/IRE-Pronounciation.js';
import notesReducer from './interactiveReadingSupport/reducers/IRE-Notes.js';
import selectedTextReducer from './interactiveReadingSupport/reducers/IRE-SelectedTextReducer.js';

const rootReducer = combineReducers({
  toDos: toDoItemsReducer,
  selectedView: toDoFilterReducer,
  meanings: meaningsReducer,
  pronounciations: pronounciationReducer,
  writeups: notesReducer,
  selectedNote: selectedTextReducer,
});

export default rootReducer;
