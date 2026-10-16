import { useState } from 'react'
import logoImg from '../assets/images/logo_dark.png'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header id="header" className="header">
    <div className='header-brand'>
      <img 
        src={logoImg}
        alt="Markus Jönsson logo"
        className="header-logo"/>
    <div className='header-brand-text'>
      <h1>Markus Jönsson</h1>
      <p className="header-subtitle">Frontend Developer - Environmental Science</p>
      </div>
      </div>
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
>
        {menuOpen ? '✕' : '☰'}
      </button>
      <nav
  id="main-navigation"
  className={menuOpen ? 'nav-open' : ''}
>
  <ul>
    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
  </ul>
</nav>
    </header>
  )
}

export default Header