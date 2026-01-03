import { api } from '../../../lib/axios';
import type { LoginInput, RegisterInput, LoginResponse, RegisterResponse } from '../types';

export const loginWithEmailAndPassword = (data: LoginInput): Promise<LoginResponse> => {
  return api.post('/auth/login', data);
};

export const registerWithEmailAndPassword = (data: RegisterInput): Promise<RegisterResponse> => {
  return api.post('/auth/register', data);
};
