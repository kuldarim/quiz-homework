import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);

export default store;
