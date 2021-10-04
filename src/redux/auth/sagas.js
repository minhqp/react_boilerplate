import { put, all, takeLatest } from 'redux-saga/effects';
import apis from '@apis';
import { setCookie } from '@src/utils/cookie';
import { A_WEEK } from '@src/constants';
import axiosClient from '@apis/api';

import actions from '../actions';

function* loginSaga(email, password) {
  try {
    const { accessToken } = yield apis.auth.login(email, password);
    axiosClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    setCookie('accessToken', accessToken, A_WEEK);
    yield put(actions.auth.loginSuccess(accessToken));
  } catch (error) {
    yield put(actions.auth.loginFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.auth.actionTypes.LOGIN, loginSaga)]);
}
