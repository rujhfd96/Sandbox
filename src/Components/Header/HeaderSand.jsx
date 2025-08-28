import './HeaderSand.css';
import Logo from '../../../public/IMAGENS/logosandbox.png';

function HeaderSand() {
  const whatsappNumber = "5585987563949"; 
  const message = "Quero matricular meu filho na Sandbox!";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <header>
      <img src={Logo} alt="Logo Sandbox" />
      <div>
        <h2>
          Av. Clóvis Matos, 1131 - Dunas, Fortaleza - CE, 60182-251 <br />
          (85) 4002-0041
        </h2>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className='botao'>Entre em Contato!</button>
        </a>
      </div>
    </header>
  );
}

export default HeaderSand;
