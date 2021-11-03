import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #4D8695;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  margin-bottom: 30px;

`;

export const TitleContainer = styled.div`
  display: flex;

`;

export const Title = styled.h2`
  color: ${props => props.color};
  font-size: 25px;
  cursor: pointer;
`;

export const InputContainer = styled.div``;

export const Input = styled.input`
  height: 35px;
  width: 400px;
  border-radius: 8px;
  border: none;
  padding: 5px 10px;
  color: #141414;

  &::placeholder {
    color: rgba(117, 115, 115, 0.8);;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const Action = styled.p`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:nth-child(2) {
    margin: 0 40px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const Icon = styled.i`
  font-size: 26px;
  color: #fff;
  cursor: pointer;
`;