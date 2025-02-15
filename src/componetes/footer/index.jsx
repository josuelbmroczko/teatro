import styled from "styled-components";
import { dados } from "../ajustes/ajustes";

export const StyledFooter = styled.footer`
  color: #fff;
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #222222f8;
  position: relative;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6); /* Sombra mais suave e teatral */
  border-top: 3px solid #ff8c00; /* Uma borda laranja para destaque */
  overflow: hidden;
`;

export const FooterSection = styled.div`
  width: 280px;
  margin: 1rem;
  text-align: left;
  transition: transform 0.3s ease-out, opacity 0.5s ease;
  
  &:hover {
    transform: scale(1.05); /* Efeito de aumento para interação */
    opacity: 1;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: "Cinzel", serif; /* Fonte serifada clássica e teatral */
  font-weight: bold;
  letter-spacing: 3px;
  color: #ff8c00;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6); /* Sombra dramática no título */
`;

export const FooterContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #f5f5f5;
  font-family: "Lora", serif;
  transition: color 0.3s ease;

  p {
    margin-bottom: 1rem;
    font-weight: 300;
    position: relative;
    z-index: 10;
  }

  p a {
    color: #ff8c00;
    text-decoration: none;
    transition: color 0.3s ease, text-shadow 0.3s ease;

    &:hover {
      color: #fff;
      text-shadow: 0 0 15px rgba(255, 140, 0, 1); /* Efeito de brilho no hover */
    }
  }
`;

export const Container = styled.section`
  background-color: rgba(0, 0, 0, 0.767);
  padding: 3rem 2rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  position: relative;
  z-index: 2;
  
  p {
    color: #f5f5f5;
    margin-top: 3rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  }
`;

const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <FooterSection>
          <FooterTitle>Centro de Atendimento</FooterTitle>
          <FooterContent>
            <p>Whatsapp: <a href="tel:+11987654321">(11) 98765-4321</a></p>
            <p>Telefone: <a href="tel:+551148223453">(11) 48223-453</a></p>
            <p><a href={dados.redesSociais.insta} target="_blank">Instagram: Teatro</a></p>
          </FooterContent>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Nossos Horários</FooterTitle>
          <FooterContent>
            <p>Segunda a sexta das 6:00 às 22:00</p>
            <p>Sábado das 9:00 às 12:00</p>
          </FooterContent>
        </FooterSection>
      </StyledFooter>

      <p>Copyright ©2023 Todos os direitos reservados</p>
    </Container>
  );
};

export default Footer;
