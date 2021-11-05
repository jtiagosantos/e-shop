import { Container, ErrorMessage, ErrorIcon } from "./styles";

type ErrorProps = {
  message: string,
  minWidth?: number,
};

export default function Error({ message, minWidth = 674 }: ErrorProps): JSX.Element {
  return(
    <Container minWidth={minWidth}>
      <ErrorMessage>
        <ErrorIcon className="fas fa-exclamation-circle" />{message}
      </ErrorMessage>
    </Container>
  );
};