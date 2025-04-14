import { useForm } from 'react-hook-form';
import { register as registerUser } from '@/features/auth/api';
import { useRouter } from 'next/router';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await registerUser(data);
      router.push('/login');
    } catch (err) {
      alert('Erro ao registrar');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <h1 className="text-xl mb-4">Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('email')} placeholder="Email" className="input" />
        <input {...register('password')} type="password" placeholder="Senha" className="input" />
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
}
