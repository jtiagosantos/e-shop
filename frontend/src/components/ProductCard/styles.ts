import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  height: 240px;
  background: #fff;
  border-radius: 0 0 5px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 70px;
  padding: 5px;
  
  cursor: pointer;

  overflow: hidden;

  &:hover {
    height: 270px;
    box-shadow: 0px 0px 4px 1px gray;
  }
`;

export const ProductImage = styled.img`
  max-width: 200px;
  min-height: 190px;
  max-height: 190px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const Price = styled.h5`
  align-self: flex-start;
  margin-left: 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const NameProduct = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 10px;
  align-self: flex-start;
  margin-left: 10px;
`;