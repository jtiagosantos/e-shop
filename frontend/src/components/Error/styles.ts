import styled from "styled-components";

type ContainerProps = {
  minWidth: number,
};

export const Container = styled.div<ContainerProps>`
  min-width: ${props => props.minWidth}px;
  max-width: 674px;
`;

export const ErrorMessage = styled.p`
  color: #636362;
  margin-bottom: 5px;
`;

export const ErrorIcon = styled.i`
  margin-right: 10px;
  color: rgba(219, 86, 78, 0.8);
`;