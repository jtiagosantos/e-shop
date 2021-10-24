import styled from 'styled-components';

type InventoryProps = {
  weight: string,
};

type ButtonProps = {
  typeCursor: string,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const ProductContainer = styled.div`
  background-color: #fff;
  margin-top: 30px;
  max-width: 1200px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 0px 4px 1px gray;
  margin: 0 auto;
  flex-wrap: wrap;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
`;

export const TopProductContainer = styled.div`
  padding: 20px 20px 20px 50px;
  display: flex;
  gap: 50px;
`;

export const BottomProductContainer = styled.div`
  margin-top: 30px;
  max-width: 815px;
  padding: 0 20px;
`;

export const ImageContainer = styled.div`
  max-width: 400px;
  max-height: 450px;
`;

export const ProductImage = styled.img`
  width: 95%;
  max-height: 450px;
`;

export const InfoContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 0 0 5px 5px;
  min-width: 300px;
  padding: 10px 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.h2`
  color: rgba(20, 20, 20, 0.8);
  font-weight: 500;
  font-size: 24px;
`;

export const ProductPrice = styled.div`
  color: rgba(20, 20, 20, 0.8);
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

export const InventoryMessage = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  margin-top: -50px;
`;

export const Inventory = styled.span<InventoryProps>`
  font-size: 20px;
  font-weight: ${props => props.weight};
  color: rgba(20, 20, 20, 0.8);
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 10px;
  height: 60px;
  border-radius: 5px;
  border: none;
  background: #377A8B;
  cursor: ${props => props.typeCursor};

  &:hover {
    filter: brightness(0.9);
  }
`;

export const TitleButton = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

export const TitleDescription = styled.h2`
  color: rgba(20, 20, 20, 0.8);
`;

export const Description = styled.p`
  color: rgba(20, 20, 20, 0.8);
  font-size: 16px;
  word-break: break-all;
`;