import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "a a"
                       "b b"
                       "c d"
                       "e e";
  grid-gap: 10px;
  max-width: 800px;
`;

export const Input = styled.input`
  background: #fff;
  border-radius: 8px;
  height: 50px;
  border: 1px solid #ccc;
  padding: 7px;
  font-size: 16px;
  color: #141414;

  &:nth-child(1) {
    grid-area: a;
    max-width: 100%;
  }

  &:nth-child(2) {
    grid-area: b;
    //margin: 15px 10px 15px 0;
  }

  &:nth-child(3) {
    grid-area: c;
    //margin: 15px 0 15px 10px;
  }

  &:nth-child(4) {
    grid-area: d;
    //margin: 15px 0 15px 10px;
  }
`;

export const TextArea = styled.textarea`
  grid-area: e;
  resize: none;

  background: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  height: 210px;

  padding: 7px;
  font-size: 16px;
  color: #141414;
`;

export const Button = styled.button`
  padding: 10px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background: #377A8B;
  cursor: pointer;

  margin-top: 10px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const TextButton = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;