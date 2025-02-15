import styled from "styled-components";

export const StyledSection1 = styled.section`
 
  height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(145deg, rgba(26, 26, 26, 0.38), rgba(76, 59, 27, 0.49)); /* Fundo dramático */
  padding: 2rem;

  h2 {
    font-size: 5rem;
    color: #ffd700; /* Ouro para representar elegância teatral */
    font-family: "Playfair Display", serif;
    letter-spacing: 2px;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8);
    margin-bottom: 2rem;
  }

  p {
    width: 70%;
    font-size: 1.8rem;
    color: #f4f4f4;
    font-weight: 500;
    font-family: "Merriweather", serif;
    background-color: rgba(0, 0, 0, 0.6); /* Fundo translúcido para um efeito dramático */
    padding: 1.5rem 2rem;
    border-radius: 25px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7); /* Sombra para dar profundidade */
    margin: 0 auto;
  }

  a {
    color: #ffd700;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #ffcc00;
    }
  }

  /* Ajustes para telas menores */
  @media (max-width: 768px) {
    h2 {
      font-size: 3.5rem;
    }

    p {
      width: 85%; /* Aumenta a largura do parágrafo para mais espaço */
      font-size: 1.6rem; /* Tamanho de fonte mais legível */
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2.8rem;
    }

    p {
      width: 90%; /* Melhor aproveitamento da largura em dispositivos pequenos */
      font-size: 1.4rem;
      padding: 1rem;
    }
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 2.2rem; /* Tamanho ainda menor em telas pequenas */
    }

    p {
      width: 90%;
      font-size: 1.2rem;
      padding: 0.8rem;
    }
  }
`;
