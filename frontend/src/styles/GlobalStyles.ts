import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: #ccc;
  }

  input {
    outline: none;

    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  textarea {
    outline: none;
  }

  select {
    outline: none;
  }
`;