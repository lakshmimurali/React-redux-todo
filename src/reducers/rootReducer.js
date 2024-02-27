import { combineReducers } from 'redux';
import toDoItemsReducer from './toDoReducer.js';
import toDoFilterReducer from './toDoFilterReducer.js';
import meaningsReducer from '../interactiveReadingSupport/reducers/IRE-Meanings.js';
import pronounciationReducer from '../interactiveReadingSupport/reducers/IRE-Pronounciation.js';
import abbreviationsReducer from '../interactiveReadingSupport/reducers/IRE-Abbreviations.js';
import notesReducer from '../interactiveReadingSupport/reducers/IRE-Notes.js';
import selectedTextReducer from '../interactiveReadingSupport/reducers/IRE-SelectedTextReducer.js';
import currentActionReducer from '../interactiveReadingSupport/reducers/IRE-CurrentActionReducer.js';

const rootReducer = combineReducers({
  toDos: toDoItemsReducer,
  selectedView: toDoFilterReducer,
  meanings: meaningsReducer,
  pronounciations: pronounciationReducer,
  abbr: abbreviationsReducer,
  writeups: notesReducer,
  selectedNode: selectedTextReducer,
  currentAction: currentActionReducer,
});

export default rootReducer;
