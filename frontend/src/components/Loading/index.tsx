import { Dispatch, SetStateAction } from 'react';
import ReactLoading from 'react-loading';

import { useAuthContext } from '../../hooks/useAuthContext';

import { Container } from './styles';

type LoadingProps = {
  setIsLoading: Dispatch<SetStateAction<boolean>>,
};

export default function Loading({ setIsLoading }: LoadingProps): JSX.Element {
  const { setToken, setUsername, setIsAdmin } = useAuthContext();

  setTimeout(() => {
    localStorage.clear();
    setToken('');
    setUsername('');
    setIsAdmin('');
    setIsLoading(false);
  }, 2000);

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