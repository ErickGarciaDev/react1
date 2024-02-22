import { LoginContainer } from './styles';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((users) => {
        const userExists = users.find(
          (user: any) =>
            user.email === data.email && user.password === data.password
        );
        if (!userExists) {
          alert('Usuário ou senha inválidos');
          reset();
        } else {
          navigate('/home');
        }
      });
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            id="email"
            autoComplete="username"
            {...register('email')}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            {...register('password')}
            autoComplete="current-password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </LoginContainer>
  );
};
