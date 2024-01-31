// index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  // Add other reducers as needed
});

export default rootReducer;
