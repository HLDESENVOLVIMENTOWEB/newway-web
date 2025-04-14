import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthService } from '@/services/auth.service';
import { useAuth } from '@/store/useAuth';
import { useRouter } from 'next/router';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

type AuthFormProps = {
  type: 'login' | 'register';
};

const schema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
});

type FormData = z.infer<typeof schema>;

export const AuthForm = ({ type }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const setToken = useAuth((s) => s.setToken);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      if (type === 'login') {
        const res = await AuthService.login(data);
        setToken(res.data.access_token);
        router.push('/dashboard');
      } else {
        await AuthService.register(data);
        router.push('/login');
      }
    } catch (err) {
      alert('Erro ao autenticar');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        {type === 'login' ? 'Entrar' : 'Cadastrar'}
      </h1>

      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Senha"
        type="password"
        {...register('password')}
        error={errors.password?.message}
      />

      <Button type="submit" disabled={isSubmitting}>
        {type === 'login' ? 'Entrar' : 'Cadastrar'}
      </Button>
    </form>
  );
};
