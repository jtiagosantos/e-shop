import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopAddress = styled.div`
  min-width: 70%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type TitleTopAddressProps = {
  fontSize: number,
};

export const TitleTopAddress = styled.p<TitleTopAddressProps>`
  margin-bottom: 0;
  color: rgba(20, 20, 20, 0.4);
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
`;

export const HorizontalLine = styled.hr`
  border: 2px solid rgba(20, 20, 20, 0.4);
  min-width: 70%;
  margin-top: -4px;
`;

export const AddAddressButton = styled.button`
  height: 35px;
  border: none;
  border-radius: 5px;
  background: #377A8B;
  padding: 0 7px;
  color: #fff;
  margin-bottom: 8px;
  font-weight: 500;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Addresses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 30px;

  & > div {
    border: 1px solid gray;
    height: 35px;
    border-radius: 5px;
    padding: 5px 5px 0 5px;
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonContainer = styled.div`
  min-width: 70%;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

export const Button = styled.button`
  height: 35px;
  border: none;
  border-radius: 5px;
  background: #377A8B;
  padding: 0 7px;
  color: #fff;
  margin-bottom: 8px;
  font-weight: 500;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const DeleteText = styled.span`
  margin-left: 15px;
  color: #377A8B;
  margin-left: 25px;
  margin: 0 0 0 25px;
  
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const EmptyCartText = styled.p`
  color: rgba(20, 20, 20, 0.9);
  font-size: 20px;
  font-weight: bold;
  margin-top: 200px;
`;