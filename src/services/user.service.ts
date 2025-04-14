import { api } from '@/lib/axios';

export const UserService = {
  list: () => api.get('/users'),
  get: (id: string) => api.get(`/users/${id}`),
  update: (id: string, data: any) => api.put(`/users/${id}`, data),
  delete: (id: string) => api.delete(`/users/${id}`),
};
