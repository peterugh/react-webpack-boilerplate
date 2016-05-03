import { createStore, combineReducers } from 'redux';
import { itemsReducer } from '../reducers/itemsReducer';
import { userReducer } from '../reducers/userReducer';

const reducer = combineReducers({
  user: userReducer,
  items: itemsReducer
});

const appStore = createStore(reducer);

export default appStore;