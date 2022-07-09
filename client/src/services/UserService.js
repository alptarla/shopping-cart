import apiClient from '../utils/apiClient';

async function fetchCurrentUser() {
  const { data } = await apiClient.get('/auth');
  return data.user;
}

async function userRegister({ email, password, firstName, lastName }) {
  const { data } = await apiClient.post('/auth/register', {
    email,
    password,
    firstName,
    lastName,
  });
  return data.token;
}

async function userLogin({ email, password }) {
  const { data } = await apiClient.post('/auth/login', {
    email,
    password,
  });
  return data.token;
}

export default {
  fetchCurrentUser,
  userRegister,
  userLogin,
};
