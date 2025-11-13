// src/Components/Header/HeaderSand.jsx
import "./HeaderSand.css";
import Logo from "../../../public/IMAGENS/logosandbox.png";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const TEXTS = {
  pt: {
    button: "Entre em Contato!",
    whatsappMessage: "Quero matricular meu filho na Sandbox!",
    logoAlt: "Logo Sandbox",
  },
  en: {
    button: "Contact Us!",
    whatsappMessage: "I would like to enroll my child at Sandbox!",
    logoAlt: "Sandbox Logo",
  },
};

function HeaderSand() {
  const { lang } = useLanguage();
  const t = TEXTS[lang];

  const whatsappNumber = "5585987563949";
  const message = t.whatsappMessage;
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <header>
      <img src={Logo} alt={t.logoAlt} />
      <div className="header-actions">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>
    </header>
  );
}

export default HeaderSand;
