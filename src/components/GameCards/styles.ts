import styled from 'styled-components';

export const Cards = styled.div`
  background-color: #f2f2f2;
  border-radius: 15px;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 15px;

  img {
    margin-top: 10px;
    border-radius: 15px;
    display: block;
    width: 70%;
    height: 200px;
  }

  h4 {
    margin-top: 10px;
  }

  span {
    color: #3650f5;
    font-weight: 500;
  }

  p {
    text-align: center;
    margin-top: 10px;
  }
`;
