import { api } from '@/lib/axios';

export const fetchTasks = () => api.get('/tasks');
export const createTask = (data: { title: string }) => api.post('/tasks', data);
