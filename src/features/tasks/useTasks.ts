import { useEffect, useState } from 'react';
import { fetchTasks } from './api';

export const useTasks = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks()
      .then((res) => setTasks(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { tasks, loading };
};
