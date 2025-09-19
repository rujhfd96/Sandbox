import './HeaderSand.css';
import Logo from '../../../public/IMAGENS/logosandbox.png';
import { FaWhatsapp } from "react-icons/fa";

function HeaderSand() {
  const whatsappNumber = "5585987563949"; 
  const message = "Quero matricular meu filho na Sandbox!";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <header>
      <img src={Logo} alt="Logo Sandbox" />
      <div className="header-actions">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
          <button className='botao'>Entre em Contato!</button>
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>
    </header>
  );
}

export default HeaderSand;
