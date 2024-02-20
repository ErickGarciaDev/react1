import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;

  label {
    margin-top: 20px;

    input {
      margin-left: 5px;
      width: 300px;
      height: 30px;
      font-size: 16px;
    }

    select {
      margin-left: 5px;
    }
  }

  button {
    margin-top: 20px;
    padding: 10px 0;
    font-size: 16px;
    width: 200px;
    background-color: white;
    border: none;
    border-radius: 10px;
    background-color: #337df0;
    color: white;

    &:hover {
      scale: 1.1;
      transition-duration: 0.5s;
      cursor: pointer;
    }
  }
`;

export const RegistrationContainer = styled(LoginContainer)`
  background-color: #53c1f0;
`;
