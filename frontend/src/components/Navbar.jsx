import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ activeSection, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (section) => {
    onNavClick(section)
    setIsMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <header className="sticky-header">
      <h2 className="logo">My Portfolio</h2>
      <nav>
        <ul className={`nav-links menu ${isMenuOpen ? 'active' : ''}`} id="menu">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home') }} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about') }} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills') }} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects') }} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  )
}

export default Navbar

