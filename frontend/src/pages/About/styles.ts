import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-top: 50px;
`;

export const Contact = styled.div``;

export const TitleContact = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: #4D8695;
`;

export const SubTitleContact = styled.h2`
  font-weight: 600;
  font-size: 16px;
  color: rgba(20, 20, 20, 0.7);
`;

export const HourContact = styled.p`
  font-size: 12px;
  color: rgba(20, 20, 20, 0.7);
  max-width: 230px;
`;

type IconProps = {
  color: string,
  marginLeft?: number,
  marginRight?: number,
  cursor?: string,
};

export const Icon = styled.i<IconProps>`
  font-size: 18px;
  color: ${props => props.color};
  margin-left: ${props => props.marginLeft}px;
  margin-right: ${props => props.marginRight}px;
  cursor: ${props => props.cursor || ''};
`;

export const Box = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  height: 25px;
`;

export const Email = styled.p`
  font-size: 14px;
  color: rgba(20, 20, 20, 0.7);
  margin-left: 10px;
`;

export const PhoneContainer = styled.div`

`;

export const PhoneTitle = styled.h1`
  font-weight: 600;
  font-size: 18px;
  color: #4D8695;
`;

export const PhoneNumber = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: rgba(20, 20, 20, 0.7);
`;