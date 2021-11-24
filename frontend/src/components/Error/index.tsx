import { Container, ErrorMessage, ErrorIcon } from "./styles";

type ErrorProps = {
  message: string,
  minWidth?: number,
  fontSize?: string,
};

export default function Error({ message, minWidth = 674, fontSize }: ErrorProps): JSX.Element {
  return(
    <Container minWidth={minWidth}>
      <ErrorMessage fontSize={fontSize}>
        <ErrorIcon className="fas fa-exclamation-circle" />{message}
      </ErrorMessage>
    </Container>
  );
};