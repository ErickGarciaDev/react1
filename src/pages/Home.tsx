import { RegistrationContainer } from './styles';
import { LoginContainer } from './styles';

export const Home = () => {
  return (
    <div
      style={{
        height: '60vh',
        width: '100%',
        display: 'flex',
        gap: '10%',
        justifyContent: 'center',
        margin: ' 50px 100px',
      }}
    >
      <LoginContainer>
        <h2>Login</h2>
        <form action="" style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="email">
            E-mail
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            Senha
            <input type="password" name="password" id="password" />
          </label>
        </form>
        <button>Login</button>
      </LoginContainer>
      <span
        style={{
          display: 'flex',
          height: '50%',
          alignItems: 'center',
          fontSize: '30px',
        }}
      >
        OU
      </span>
      <RegistrationContainer>
        <h2>Cadastre-se</h2>
        <form action="" style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name">
            Nome completo
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="email">
            E-mail
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="birthDate">
            Nascimento
            <input type="text" name="birthDate" id="birthDate" />
          </label>
          <label htmlFor="country">
            País
            <select name="country" id="country">
              <option value="">Selecione um país</option>
              <option value="AF">Afeganistão</option>
              <option value="ZA">África do Sul</option>
              <option value="AL">Albânia</option>
              <option value="DE">Alemanha</option>
              <option value="BR">Brasil</option>
            </select>
          </label>
          <label htmlFor="state">
            Estado
            <select name="state" id="state">
              <option value="" disabled selected>
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
        </form>
        <button>Cadastrar</button>
      </RegistrationContainer>
    </div>
  );
};
