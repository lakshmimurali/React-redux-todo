import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// sample state = { selectedView:"All|Active|Completed" , toDos:[{1:{id:1,task:a, completed:false}}, {2:{ id:2,task:b,completed:true}}]}

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

 const appStore = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(appStore);

//const appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
