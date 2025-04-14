import { useForm } from 'react-hook-form';
import { login } from '@/features/auth/api';
import { useAuth } from '@/store/useAuth';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const setToken = useAuth((s) => s.setToken);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const res = await login(data);
      setToken(res.data.access_token);
      router.push('/dashboard');
    } catch (err) {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <h1 className="text-xl mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('email')} placeholder="Email" className="input" />
        <input {...register('password')} type="password" placeholder="Senha" className="input" />
        <button className="btn">Entrar</button>
      </form>
    </div>
  );
}
