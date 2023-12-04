import { environment } from '../environments/environments';

import * as request from './request';

const URL = environment.url;

export async function register(userData) {
  const result = await request.post(`${URL}/register`, userData);

  return result;
}

export async function login(userData) {
  const result = await request.post(`${URL}/login`, userData);

  return result;
}

export async function logout() {
  const result = await request.post(`${URL}/logout`);

  // return result;
}

export async function getProfile() {
  const result = await request.get(`${URL}/users/profile`);

  return result;
}
