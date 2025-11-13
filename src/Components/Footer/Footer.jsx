import "./Footer.css";
import Logo from "../../../public/IMAGENS/logosandboxbranca.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Logo */}
        <div className="footer__logo">
          <img src={Logo} alt="Logo da Escola Sandbox" />
        </div>

        {/* Informações */}
        <div className="footer__info">
          <p>Av. Clóvis Matos, 1131 - Dunas, Fortaleza - CE</p>
          <p>Telefone: (85) 4002-0041</p>
        </div>

        {/* Redes sociais */}
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
          <a
            href="https://www.youtube.com/@SandboxInternationalSchool"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Sandbox International School</p>
      </div>
    </footer>
  );
}
