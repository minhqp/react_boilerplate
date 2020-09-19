import { combineReducers } from 'redux';
import auth, { initialState as authInitialState } from './auth/reducer';

export const initialState = {
  auth: authInitialState,
};

export default combineReducers({
  auth,
});
