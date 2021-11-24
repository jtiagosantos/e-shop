import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(78, 89, 131, .5);
  backdrop-filter: blur(5px);
  z-index: 1;
`; 

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 7px;
  font-size: 13px;
  color: #141414;
  margin-bottom: 10px;
`;

const grow = keyframes`
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.3);
  }
`;

export const Modal = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;

  animation: ${grow} 0.2s ease;
  transform: scale(1.3);
`;

export const Button = styled.button`
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #377A8B;
  padding: 0 7px;
  color: #fff;

  &:hover {
    filter: brightness(0.9);
  }

  &:first-child {
    background: gray;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;