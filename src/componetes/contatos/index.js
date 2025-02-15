import styled from "styled-components";

export const StyleContainer = styled.section`
  background-color: rgba(11, 11, 11, 0.9);
  padding: 3rem 2rem;
  border-radius: 25px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7);
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    color: #ffd700;
    font-family: "Anton", sans-serif;
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledContatos = styled.section`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  li {
    color: white;
    font-size: 1.5rem;
    margin: 1rem 0;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-weight: 600;
   
  }

  a:hover {
    transform: scale(1.1);
    color: #ffd700;
  }

  span {
    font-size: 1.2rem;
    color: #b4b4b4;
    font-weight: 400;
    text-transform: capitalize;
    transition: color 0.3s ease;
  }

  a:hover span {
    color: #ffd700;
  }

  svg {
    color: #ffd700;
    transition: color 0.3s ease;
  }

  a:hover svg {
    color: #ff8c00; /* Muda a cor do ícone ao passar o mouse */
  }

  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    h2 {
      font-size: 2.5rem;
    }
    span {
      font-size: 1rem;
    }
 
  }
`;
