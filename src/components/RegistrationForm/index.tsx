// RegistrationForm.tsx
// import { useEffect, useState } from 'react';
import { RegistrationContainer } from './styles';
import { useForm } from 'react-hook-form';

export const RegistrationForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((users) => {
        const userExists = users.some((user: any) => user.email === data.email);
        if (userExists) {
          alert('Usuário já cadastrado, faça o login para continuar');
        } else {
          fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then(() => alert('usuário cadastrado com sucesso'))
            .catch((error) => console.error('Error:', error))
            .finally(() => {
              reset();
            });
        }
      });
  };

  return (
    <RegistrationContainer>
      <h2>Cadastre-se</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="name">
          Nome completo
          <input {...register('name')} type="text" name="name" id="name" />
        </label>
        <label htmlFor="register-email">
          E-mail
          <input {...register('email')} type="email" id="register-email" />
        </label>
        <label htmlFor="register-password">
          Senha
          <input type="text" {...register('password')} id="register-password" />
        </label>
        <label htmlFor="birthDate">
          Nascimento
          <input type="text" id="birthDate" {...register('birthDate')} />
        </label>
        <label htmlFor="country">
          País
          <select
            id="country"
            {...register('country')}
            defaultValue="Selecione um país"
          >
            <option value="Selecione um país" disabled>
              Selecione um país
            </option>
            <option value="AF">Afeganistão</option>
            <option value="ZA">África do Sul</option>
            <option value="AL">Albânia</option>
            <option value="DE">Alemanha</option>
            <option value="BR">Brasil</option>
          </select>
        </label>
        <label htmlFor="state">
          Estado
          <select
            id="state"
            {...register('state')}
            defaultValue="Selecione um estado"
          >
            <option value="Selecione um estado" disabled>
              Selecione um estado
            </option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </label>
        <button>Cadastrar</button>
      </form>
    </RegistrationContainer>
  );
};
