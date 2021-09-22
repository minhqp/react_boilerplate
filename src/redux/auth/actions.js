export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

const login = (email, password) => ({
  type: actionTypes.LOGIN,
  email,
  password,
});

const loginSuccess = (accessToken) => ({
  type: actionTypes.LOGIN_SUCCESS,
  accessToken,
});

const loginFailure = () => ({
  type: actionTypes.LOGIN_FAILURE,
});

export { login, loginSuccess, loginFailure };
