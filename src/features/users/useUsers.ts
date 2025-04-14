import { useEffect, useState } from 'react';
import { fetchUsers } from './api';

export const useUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading };
};
