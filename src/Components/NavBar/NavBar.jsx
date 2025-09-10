import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NAV_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/metodologia', label: 'Sobre a metodologia' },
  { to: '/galeria', label: 'Galeria de imagens' },
  { to: '/formulario', label: 'Envie Formulário' },
  { to: '/faq', label: 'Perguntas Frequentes' }
];

function NavBar(){
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={open ? 'is-open' : ''}>
      <div className="nav__bar">
        {/* sem brand */}
        <ul className="nav__links--desktop" role="menubar" aria-label="Navegação principal">
          {NAV_LINKS.map(({to, label}) => (
            <li key={to} role="none">
              <Link role="menuitem" to={to}>{label}</Link>
            </li>
          ))}
        </ul>

        <button
          className="nav__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="nav-drawer"
          onClick={() => setOpen(v => !v)}
        >
          <span className="nav__toggleLine" />
          <span className="nav__toggleLine" />
          <span className="nav__toggleLine" />
        </button>
      </div>

      <button className="nav__scrim" aria-hidden={!open} onClick={closeMenu} tabIndex={open ? 0 : -1} />

      <aside id="nav-drawer" className="nav__drawer" aria-hidden={!open}>
        <div className="nav__drawerHeader">
          <span className="nav__drawerTitle">Menu</span>
          <button className="nav__drawerClose" onClick={closeMenu} aria-label="Fechar menu">×</button>
        </div>
        <ul className="nav__links--mobile">
          {NAV_LINKS.map(({to, label}) => (
            <li key={`m-${to}`}>
              <Link to={to} onClick={closeMenu}>{label}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
}

export default NavBar;
