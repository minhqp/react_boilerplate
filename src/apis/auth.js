import api from './api';

const login = async (email, password) => {
  const loginInfo = await api({
    method: 'POST',
    url: '/auths/login',
    data: { email, password },
  });
  return loginInfo;
};

export { login };
