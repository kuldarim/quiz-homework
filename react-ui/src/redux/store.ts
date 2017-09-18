import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
const logger = require('redux-logger').default;

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger,
  ),
);

export default store;
