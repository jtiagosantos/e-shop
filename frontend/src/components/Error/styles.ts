import styled from "styled-components";

type ContainerProps = {
  minWidth?: number,
};

type ErrorMessageProps = {
  fontSize?: string,
};

export const Container = styled.div<ContainerProps>`
  min-width: ${props => props.minWidth}px;
  max-width: 674px;
`;

export const ErrorMessage = styled.p<ErrorMessageProps>`
  color: #636362;
  margin-bottom: 5px;
  font-size: ${props => props.fontSize || '1rem'};
`;

export const ErrorIcon = styled.i`
  margin-right: 10px;
  color: rgba(219, 86, 78, 0.8);
`;