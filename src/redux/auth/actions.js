export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

export function login(email, password) {
  return {
    type: actionTypes.LOGIN,
    email,
    password,
  };
}

export function loginSuccess(accessToken) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    accessToken,
  };
}

export function loginFailure() {
  return {
    type: actionTypes.LOGIN_FAILURE,
  };
}
