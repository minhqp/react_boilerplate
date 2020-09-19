const { put, all, takeLatest } = require('redux-saga/effects');
const apis = require('../../apis');
const actions = require('../actions');
const { setCookie } = require('../../utils/cookie');

function* loginSaga(email, password) {
  try {
    const A_WEEK = 7 * 24 * 60 * 60 * 1000;
    const { accessToken } = yield apis.auth.login(email, password);
    setCookie('accessToken', accessToken, A_WEEK);
    yield put(actions.auth.loginSuccess(accessToken));
  } catch (error) {
    yield put(actions.auth.loginFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.auth.actionTypes.LOGIN, loginSaga)]);
}
