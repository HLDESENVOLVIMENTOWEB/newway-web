import { useTasks } from './useTasks';

export const TaskList = () => {
  const { tasks, loading } = useTasks();

  if (loading) return <p>Carregando...</p>;

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="p-2 bg-white border rounded">
          {task.title}
        </li>
      ))}
    </ul>
  );
};
