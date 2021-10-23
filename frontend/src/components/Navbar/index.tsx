import { 
  Container, 
  TitleContainer, 
  Title, 
  InputContainer, 
  Input, 
  ActionsContainer,
  Action,
  CartIcon
} from "./styles";

import { useSearchContext } from "../../hooks/useSearchContext";

export default function Navbar(): JSX.Element {
  const { search, setSearch } = useSearchContext();

  return(
    <Container>
      <TitleContainer>
        <Title color="rgba(45, 71, 120, 0.9);">e</Title>
        <Title color="#cbe5e0">Shop</Title>
      </TitleContainer>
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
        <CartIcon className="fas fa-shopping-cart"></CartIcon>
      </ActionsContainer>
    </Container>
  );
};