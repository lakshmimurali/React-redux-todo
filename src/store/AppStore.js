import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const initialState = { selectedView: 'All', toDos: [] };
// sample state = { selectedView:"All|Active|Completed" , toDos:[{1:{id:1,task:a, isCompleted:false}}, {2:{ id:2,task:b,isCompleted:true}}]}

const appStore = createStore(rootReducer);

export default appStore;
