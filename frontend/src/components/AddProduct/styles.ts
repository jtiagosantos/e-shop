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
`;

export const Input = styled.input`
  background: #fff;
  border-radius: 8px;
  height: 50px;
  border: 1px solid #ccc;
  padding: 7px;
  font-size: 16px;
  color: #141414;

  &:nth-child(2) {
    grid-area: b;
  }

  &:nth-child(3) {
    grid-area: c;
  }
`;

export const InputFile = styled.div`
  grid-area: a;
  background: #fff;
  border-radius: 8px;
  font-size: 16px;

  display: flex;
  align-items: center;
  padding: 5px 0 5px 7px;

  input {
    border: none;
    height: 40px;
  }
`;

export const Label = styled.label`
  color: rgb(118, 118, 118);
  display: flex;
  align-items: center;
`;

export const OptionList = styled.select`
  grid-area: d;
  background: #fff;
  border-radius: 8px;
  height: 50px;
  border: 1px solid #ccc;
  padding: 7px;
  font-size: 16px;
  color: #141414;
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

export const ErrorContainer = styled.div`
  min-width: 674px;
  max-width: 674px;
  margin: 20px 0;
`;

export const ErrorMessage = styled.p`
  color: #636362;
  margin-bottom: 5px;
`;

export const ErrorIcon = styled.i`
  margin-right: 10px;
  color: rgba(219, 86, 78, 0.8);
`;