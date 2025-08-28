import "./Footer.css";
import Logo from "../../../public/IMAGENS/logosandboxbranca.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
       
        <div className="footer__logo">
          <img src={Logo} alt="Logo da Escola Sandbox" />
          
        </div>

        
        <div className="footer__info">
          <p>Av. Clóvis Matos, 1131 - Dunas, Fortaleza - CE</p>
          <p>Telefone: (85) 4002-0041</p>
        </div>

        
        <div className="footer__socials">
          <a
            href="https://www.facebook.com/SandboxFortaleza/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/sandboxinternational_school/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Sandbox International School</p>
      </div>
    </footer>
  );
}
