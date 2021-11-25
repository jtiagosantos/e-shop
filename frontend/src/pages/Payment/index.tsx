import Navbar from '../../components/Navbar';

import { Container, Image, Message } from './styles';

import toolsWebImage from '../../assets/technical-support.png';

export default function Payment(): JSX.Element {
  return(
    <Container>
      <Navbar showOnlyTitle={true} />

      <Image src={toolsWebImage} alt='unauthorized' />
      <Message>Página em desenvolvimento!</Message>
    </Container>
  );
};