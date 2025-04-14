import { useEffect } from 'react';
import { useAuth } from '@/store/useAuth';
import { useRouter } from 'next/router';

export default function HomePage() {
  const token = useAuth((s) => s.token);
  const router = useRouter();

  useEffect(() => {
    router.push(token ? '/dashboard' : '/login');
  }, [token]);

  return null;
}
