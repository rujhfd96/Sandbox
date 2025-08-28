import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre Nós</Link>
                </li>
                <li>
                    <Link to="/metodologia">Sobre a metodologia</Link>
                </li>
                <li>
                    <Link to="/galeria">Galeria de imagens</Link>
                </li>
                <li>
                    <Link to="/formulario">Envie Formulário</Link>
                </li>
      </ul>
        </nav>
    )
}

export default NavBar;