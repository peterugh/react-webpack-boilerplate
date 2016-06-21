import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { itemsReducer } from '../reducers/itemsReducer';
import { userReducer } from '../reducers/userReducer';
import { catsReducer } from '../reducers/catsReducer';

const reducer = combineReducers({
  user: userReducer,
  items: itemsReducer,
  cats: catsReducer
});

const appStore = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);

export default appStore;