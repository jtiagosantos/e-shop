import ReactLoading from 'react-loading';

import { Container } from './styles';

export default function LoadingV2(): JSX.Element {
  return(
    <Container>
      <ReactLoading 
        type='spin' 
        color='#4D8695' 
        width={100} 
      />
    </Container>
  );
};