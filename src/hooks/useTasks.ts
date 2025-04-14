import { useEffect, useState } from 'react';
import { TaskService } from '@/services/task.service';

export const useTasks = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const res = await TaskService.list();
    setTasks(res.data);
  };

  useEffect(() => {
    load().finally(() => setLoading(false));
  }, []);

  return { tasks, loading, reload: load };
};
