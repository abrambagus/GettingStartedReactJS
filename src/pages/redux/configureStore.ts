import { createStore } from 'redux';
import { setUserReducer } from './reducers/SetUserReducer';

export const configureStore = () => {
  return createStore(setUserReducer);
};
