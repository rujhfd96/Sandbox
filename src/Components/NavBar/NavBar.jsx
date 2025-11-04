import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useLanguage } from '../../context/LanguageContext';

const NAV_LINKS = {
  pt: [
    { to: '/', label: 'Início' },
    { to: '/sobre', label: 'Sobre Nós' },
    { to: '/metodologia', label: 'Sobre a Metodologia' },
    { to: '/galeria', label: 'Galeria de Imagens' },
    { to: '/formulario', label: 'Entre em Contato' },
    { to: '/faq', label: 'Perguntas Frequentes' },
  ],
  en: [
    { to: '/', label: 'Home' },
    { to: '/sobre', label: 'About Us' },
    { to: '/metodologia', label: 'Our Methodology' },
    { to: '/galeria', label: 'Image Gallery' },
    { to: '/formulario', label: 'Contact Us' },
    { to: '/faq', label: 'FAQ' },
  ],
};

function NavBar() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  // Escolhe os textos conforme idioma atual
  const links = NAV_LINKS[lang];
  const menuTitle = lang === 'pt' ? 'Menu' : 'Menu';
  const closeLabel = lang === 'pt' ? 'Fechar menu' : 'Close menu';
  const openLabel = lang === 'pt' ? 'Abrir menu' : 'Open menu';
  const navLabel = lang === 'pt' ? 'Navegação principal' : 'Main navigation';

  return (
    <nav className={open ? 'is-open' : ''}>
      <div className="nav__bar">
        {/* Links desktop */}
        <ul className="nav__links--desktop" role="menubar" aria-label={navLabel}>
          {links.map(({ to, label }) => (
            <li key={to} role="none">
              <Link role="menuitem" to={to}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão hamburger */}
        <button
          className="nav__toggle"
          aria-label={open ? closeLabel : openLabel}
          aria-expanded={open}
          aria-controls="nav-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggleLine" />
          <span className="nav__toggleLine" />
          <span className="nav__toggleLine" />
        </button>
      </div>

      {/* Fundo escurecido ao abrir menu mobile */}
      <button
        className="nav__scrim"
        aria-hidden={!open}
        onClick={closeMenu}
        tabIndex={open ? 0 : -1}
      />

      {/* Drawer mobile */}
      <aside id="nav-drawer" className="nav__drawer" aria-hidden={!open}>
        <div className="nav__drawerHeader">
          <span className="nav__drawerTitle">{menuTitle}</span>
          <button
            className="nav__drawerClose"
            onClick={closeMenu}
            aria-label={closeLabel}
          >
            ×
          </button>
        </div>
        <ul className="nav__links--mobile">
          {links.map(({ to, label }) => (
            <li key={`m-${to}`}>
              <Link to={to} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
}

export default NavBar;
