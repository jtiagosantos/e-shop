/* eslint-disable react/jsx-no-target-blank */

import Navbar from '../../components/Navbar';

import { 
  Container, 
  ContactContainer,
  Contact,
  TitleContact,
  SubTitleContact,
  HourContact,
  Icon,
  Box,
  Email,
  PhoneContainer,
  PhoneTitle,
  PhoneNumber
} from './styles';

export default function About(): JSX.Element {
  return(
    <Container>
      <Navbar showOnlyTitle={true} />
      
      <ContactContainer>
        <Contact>
          <TitleContact>Comprou pelo site?</TitleContact>
          <SubTitleContact>Horário de Atendimento</SubTitleContact>
          <HourContact>Atendimento 24h</HourContact>
          <PhoneContainer>
            <PhoneTitle>Telefones:</PhoneTitle>
            <Box>
              <Icon 
                className='fas fa-phone-alt' 
                color='#4D8695' 
                marginRight={5}
              />
              <PhoneNumber>4001-4260</PhoneNumber>
            </Box>
            <Box>
              <Icon 
                className='fas fa-phone-alt' 
                color='#4D8695' 
                marginRight={5}
              />
              <PhoneNumber>0900-234-4567</PhoneNumber>
            </Box>
          </PhoneContainer>
        </Contact>
        <Contact>
          <TitleContact>Comprou em lojas físicas?</TitleContact>
          <SubTitleContact>Horário de Atendimento</SubTitleContact>
          <HourContact>De segunda à sexta das 08h às 20h. Sábados das 08h às 18h</HourContact>
          <PhoneContainer>
            <PhoneTitle>Telefones:</PhoneTitle>
            <Box>
              <Icon 
                className='fas fa-phone-alt' 
                color='#4D8695' 
                marginRight={5}
              />
              <PhoneNumber>4091-4570</PhoneNumber>
            </Box>
            <Box>
              <Icon 
                className='fas fa-phone-alt' 
                color='#4D8695' 
                marginRight={5}
              />
              <PhoneNumber>0901-257-3387</PhoneNumber>
            </Box>
          </PhoneContainer>
        </Contact>
        <Contact>
          <TitleContact>Central de atendimento</TitleContact>
          <Box>
            <SubTitleContact>Fale por whatsapp</SubTitleContact>
            <a 
              href='https://api.whatsapp.com/send?phone=559233864594&text=Atendimento%20ao%20cliente!%20%40eshop'
              target='_blank'
            >
              <Icon 
                className='fab fa-whatsapp' 
                color='green' 
                marginLeft={10}
                cursor='pointer'
              />
            </a>
          </Box>
          <Box>
            <SubTitleContact>Fale por e-mail:</SubTitleContact>
            <Email>atendimento@eshop.com.br</Email>
          </Box>
        </Contact>
      </ContactContainer>
    </Container>
  );
};