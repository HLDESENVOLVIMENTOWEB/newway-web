import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';
import { useRouter } from 'next/router';
import { useAuth } from '@/store/useAuth';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const token = useAuth((s) => s.token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login');
      return;
    }

    api.get('/tasks')
      .then(res => setTasks(res.data))
      .catch(() => router.push('/login'));
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Suas Tarefas</h1>
      <ul className="space-y-2">
        {tasks.map((task: any) => (
          <li key={task.id} className="border p-2 rounded">{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
