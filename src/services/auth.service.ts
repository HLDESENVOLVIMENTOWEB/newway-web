import { api } from '@/lib/axios';

export const AuthService = {
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),

  register: (data: { email: string; password: string }) =>
    api.post('/auth/register', data),
};
