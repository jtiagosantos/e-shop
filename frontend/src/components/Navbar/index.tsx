import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Loading from '../Loading';

import { 
  Container, 
  TitleContainer, 
  Title, 
  InputContainer, 
  Input, 
  ActionsContainer,
  Action,
  Icon,
  IconsContainer
} from "./styles";

import { useSearchContext } from "../../hooks/useSearchContext";
import { useAuthContext } from '../../hooks/useAuthContext';

type NavbarProps = {
  showOnlyTitle?: boolean,
};

export default function Navbar({ showOnlyTitle = false }: NavbarProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const { search, setSearch } = useSearchContext();
  const { isAdmin } = useAuthContext();

  const token = localStorage.getItem('@eshop:token');
  const username = localStorage.getItem('@eshop:username');

  const history = useHistory();

  function navigateToLoginPage() {
    history.push('/login');
  };

  function navigateToRegisterPage() {
    history.push('/register');
  };

  function navigateToHomePage() {
    history.push('/');
  };

  function navigateToAboutPage() {
    history.push('/about');
  };

  return(
    <Container>
      {isLoading && <Loading setIsLoading={setIsLoading} />}

      <TitleContainer onClick={navigateToHomePage}>
        <Title color="rgba(45, 71, 120, 0.9);">e</Title>
        <Title color="#cbe5e0">Shop</Title>
      </TitleContainer>
      {!showOnlyTitle && (
        <>
          <InputContainer>
            <Input 
              type="text" 
              placeholder="Buscar produtos..." 
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
          </InputContainer>
          <ActionsContainer>
            {!token ? (
              <>
                <Action onClick={navigateToLoginPage}>Entrar</Action>
                <Action onClick={navigateToRegisterPage}>Cadastrar</Action>
              </>
            ) : (
              <Action onClick={() => setIsLoading(true)}>Sair({username})</Action>
            )}
            <Action onClick={navigateToAboutPage}>Sobre</Action>
          </ActionsContainer>
          <IconsContainer>
            {Number(isAdmin) === 1 && (
              <>
                <Link to='/administrators'>
                  <Icon className="fas fa-users"></Icon>
                </Link>
                <Link to='/add_product'>
                  <Icon className="fas fa-plus-circle"></Icon>
                </Link>
              </>
            )}
            {token && (
              <Link to='/cart'>
                <Icon className="fas fa-shopping-cart"></Icon>
              </Link>
            )}
          </IconsContainer>
        </>
      )}
    </Container>
  );
};