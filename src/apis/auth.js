import api from './api';

export async function login(email, password) {
  const loginInfo = await api({
    method: 'POST',
    url: '/auths/login',
    data: { email, password },
  });
  return loginInfo;
}
