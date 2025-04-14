import { useEffect, useState } from 'react';
import { UserService } from '@/services/user.service';

export const useUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const res = await UserService.list();
    setUsers(res.data);
  };

  useEffect(() => {
    load().finally(() => setLoading(false));
  }, []);

  return { users, loading, reload: load };
};
