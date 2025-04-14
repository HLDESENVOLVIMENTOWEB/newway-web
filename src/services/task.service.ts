import { api } from '@/lib/axios';

export const TaskService = {
  list: () => api.get('/tasks'),
  create: (data: { title: string }) => api.post('/tasks', data),
  update: (id: string, data: any) => api.put(`/tasks/${id}`, data),
  delete: (id: string) => api.delete(`/tasks/${id}`),
};
