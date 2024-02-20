import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 10px;

  label {
    margin-top: 20px;

    input {
      margin-left: 5px;
    }

    select {
      margin-left: 5px;
    }
  }

  button {
    margin-top: 10px;
    padding: 5px 10px;
    width: 100%;
  }
`;

export const RegistrationContainer = styled(LoginContainer)`
  height: 60%;
  padding: 20px;
  background-color: #53c1f0;
`;
