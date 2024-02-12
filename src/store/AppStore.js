import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = { selectedView: 'All', toDos: [] };
// sample state = { selectedView:"All|Active|Completed" , toDos:[{1:{id:1,task:a, completed:false}}, {2:{ id:2,task:b,completed:true}}]}

const appStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default appStore;
