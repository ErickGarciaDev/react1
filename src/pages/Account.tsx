import { LoginForm } from '../components/LoginForm';
import { RegistrationForm } from '../components/RegistrationForm';
export const Account = () => {
  return (
    <div
      style={{
        height: '60vh',
        width: '100%',
        display: 'flex',
        gap: '10%',
        justifyContent: 'center',
        padding: ' 50px 100px',
      }}
    >
      <LoginForm />
      <span
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          fontSize: '30px',
        }}
      >
        OU
      </span>
      <RegistrationForm />
    </div>
  );
};
