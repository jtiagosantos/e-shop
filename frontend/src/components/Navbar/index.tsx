import { Link } from 'react-router-dom';

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

type NavbarProps = {
  showOnlyTitle?: boolean,
};

export default function Navbar({ showOnlyTitle = false }: NavbarProps): JSX.Element {
  const { search, setSearch } = useSearchContext();

  return(
    <Container>
      <TitleContainer>
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
            <Action>Entrar</Action>
            <Action>Cadastrar</Action>
            <Action>Sobre</Action>
          </ActionsContainer>
          <IconsContainer>
            <Link to='/add_product'>
              <Icon className="fas fa-plus-circle"></Icon>
            </Link>
            <Icon className="fas fa-shopping-cart"></Icon>
          </IconsContainer>
        </>
      )}
    </Container>
  );
};