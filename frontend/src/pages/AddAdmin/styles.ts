import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: rgba(20, 20, 20, 0.4);
  margin: 90px 0 25px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 380px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 7px;
  font-size: 16px;
  color: #141414;

  margin-bottom: 15px;
`;

type ButtonProps = {
  typeCursor?: string,
};

export const Button = styled.button<ButtonProps>`
  padding: 10px;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: none;
  background: #377A8B;
  color: #fff !important;
  font-size: 20px;
  font-weight: 500;
  cursor: ${props => props.typeCursor || 'cursor'} !important;

  margin-top: 10px;
  margin-bottom: 20px;

  &:hover {
    filter: brightness(0.9);
  }
`;