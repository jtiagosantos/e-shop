import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopCart = styled.div`
  min-width: 70%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type TitleTopCartProps = {
  fontSize: number,
};

export const TitleTopCart = styled.p<TitleTopCartProps>`
  margin-bottom: 0;
  color: rgba(20, 20, 20, 0.4);
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
`;

type HorizontalLineProps = {
  marginTop?: number,
  minWidth: number,
  borderWidth: number,
};

export const HorizontalLine = styled.hr<HorizontalLineProps>`
  border: ${props => props.borderWidth}px solid rgba(20, 20, 20, 0.4);
  min-width: ${props => props.minWidth}%;
  margin-top: ${props => props.marginTop}px;
`;

export const VerticalLine = styled.hr`
  border: 1px solid rgba(20, 20, 20, 0.2);
  transform: rotate(180deg);
  height: 32px;
  margin-left: 25px;
`;

export const CartContents = styled.div`
  min-width: 70%;
  max-height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
      width: 7px;               
  }
  &::-webkit-scrollbar-track {
      background: gray;        
  }
  &::-webkit-scrollbar-thumb {
      background-color: #377A8B;    
      border-radius: 8px;       
  }
`;

export const CartItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ItemContent = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImageItemContainer = styled.div`
  width: 125px;
  max-height: 180px;
  background: #fff;
  border-radius: 5px;
  padding: 5px; 
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageItem = styled.img`
  max-width: 100%;
`;

export const NameItem = styled.p`
  color: rgba(20, 20, 20, 0.8);
  font-size: 18px;
`;

export const InputItem = styled.input`
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 5px;
  height: 35px;
  width: 75px;
  padding: 10px;
  color: rgba(20, 20, 20, 0.8);
`;

export const ButtonItem = styled.button`
  height: 35px;
  border: none;
  border-radius: 5px;
  background: #377A8B;
  padding: 0 7px;
  color: #fff;
  margin-left: 10px;
  
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const TextDelete = styled.p`
  color: #377A8B;
  margin-left: 25px;
  margin: 0 0 0 25px;
  
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const PriceItem = styled.h6`
  color: rgba(20, 20, 20, 0.8);
  font-weight: 600;
  font-size: 20px;
`;

export const TotalPriceText = styled.p`
  min-width: 70%;
  text-align: right;
  color: rgba(20, 20, 20, 0.7);
  margin-top: 20px;
  font-size: 20px;
  padding-right: 5px;
`;

export const EmptyCartText = styled.p`
  color: rgba(20, 20, 20, 0.9);
  font-size: 20px;
  font-weight: bold;
  margin-top: 200px;
`;

export const ButtonContainer = styled.div`
  min-width: 70%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  height: 35px;
  border: none;
  border-radius: 5px;
  background: #377A8B;
  padding: 0 7px;
  color: #fff;

  &:hover {
    filter: brightness(0.9);
  }
`;