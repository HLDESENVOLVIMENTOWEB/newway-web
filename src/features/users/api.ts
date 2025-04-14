import { api } from '@/lib/axios';

export const fetchUsers = () => api.get('/users');
export const deleteUser = (id: string) => api.delete(`/users/${id}`);
