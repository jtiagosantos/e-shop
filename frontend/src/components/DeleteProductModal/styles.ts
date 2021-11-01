import styled from "styled-components";

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
`;

export const Modal = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
`;

export const TitleModal = styled.h1`
  max-width: 400px;
  text-align: center;
  color: #3D3B3B;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  margin-top: 60px;
`;

export const Icon = styled.i`
  font-size: 60px;
  cursor: pointer;

  &:first-child {
    color: rgba(99, 189, 84, 0.8);
  }

  &:last-child {
    color: #ccc;
  }
`;