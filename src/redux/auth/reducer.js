import { actionTypes } from './actions';

export const initialState = {
  accessToken: null,
  isLoggingIn: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isLoggingIn: true };

    case actionTypes.LOGIN_SUCCESS: {
      const { accessToken } = action;
      return { ...state, isLoggingIn: false, accessToken };
    }

    case actionTypes.LOGIN_FAILURE: {
      return { ...state, isLoggingIn: false };
    }

    default:
      return state;
  }
}
