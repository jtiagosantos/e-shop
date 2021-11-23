import Navbar from '../../components/Navbar';

import unauthorizedImage from '../../assets/system.png';

import { Container, Image, Message } from './styles';

export default function Unauthorized(): JSX.Element {
  return(
    <Container>
      <Navbar showOnlyTitle={true} />

      <Image src={unauthorizedImage} alt='unauthorized' />
      <Message>Acesso não autorizado!</Message>
    </Container>
  );
};