import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { StyleContainer, StyledContatos } from ".";

export default function Contatos() {
  return (
    <StyleContainer>
         <h2>Contatos</h2>
      <StyledContatos id="contatos">
       
        <ul>
          <li>
            <a href="tel:+551199999999">
              <FaPhoneAlt size={60} />
              <span>Ligar</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://wa.me/551199999999">
              <FaWhatsapp size={60} />
              <span>WhatsApp</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={60} />
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </StyledContatos>
    </StyleContainer>
  );
}
