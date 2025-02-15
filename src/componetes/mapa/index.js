import styled from "styled-components";

export const StyleMapa = styled.section`
  display: flex;
  justify-content: center;
  align-items: center; /* Alinha o conteúdo verticalmente */
  background-color: rgba(34, 34, 34, 0.25); /* Fundo mais escuro para criar um contraste dramático */
  flex-direction: column; /* Organiza os itens em coluna */
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7); /* Sombra ao redor da seção para criar profundidade */
  border-radius: 20px; /* Bordas arredondadas para um toque mais suave e elegante */
  max-width: 900px; /* Limita a largura para evitar que o conteúdo se estenda demais */
 
  margin: 0 auto; /* Centraliza a seção horizontalmente */

  li {
    list-style: none;
    margin-top: 2rem; /* Espaçamento entre os itens da lista */
    display: flex;
    justify-content: center; /* Alinha o mapa ao centro */
  }

  iframe {
    max-width: 100%; /* Garante que o mapa não ultrapasse a largura máxima */
    width: 100%;
    height: 350px; /* Ajusta a altura do mapa para torná-lo mais adequado */
    border-radius: 15px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.8); /* Sombra mais intensa para destacar o mapa */
    transition: transform 0.3s ease-in-out; /* Efeito de transição para suavizar interações */
    
    &:hover {
      transform: scale(1.05); /* Efeito de zoom suave no mapa */
    }
  }

  p {
    font-size: 3rem;
    color: #ffd700; /* Cor dourada para um toque sofisticado */
    font-family: 'Playfair Display', serif; /* Fonte mais elegante e teatral */
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.42); /* Sombra no texto para mais destaque */
    margin-bottom: 1rem; /* Espaçamento inferior para o título */
    letter-spacing: 1px; /* Aumenta o espaçamento entre as letras para um efeito mais dramático */
    text-align: center; /* Alinha o título ao centro */
    font-weight: bold;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: column; /* Organiza os itens em coluna em telas menores */
    align-items: center;
    padding: 30px;
  }
`;
