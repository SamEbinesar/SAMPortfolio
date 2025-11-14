import './Footer.css'

const Footer = () => {
  const scrollToSection = (section) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        {/* Footer Top Section */}
        <div className="footer-top">
          <div className="footer-column">
            <h3 className="footer-logo">Sam Ebinesar S</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating beautiful, 
              responsive web applications with modern technologies.
            </p>
            <div className="social-links">
              <a 
                href="https://wa.me/916383011956" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link whatsapp"
                aria-label="WhatsApp"
              >
                <div className="social-icon-wrapper">
                  <img src="/whatsapp.jpg" alt="WhatsApp" />
                </div>
              </a>
              <a 
                href="https://www.instagram.com/__s.a.m__21?igsh=MXV0dGg4ZnVoM2toOQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <div className="social-icon-wrapper">
                  <img src="/instagram.jpg" alt="Instagram" />
                </div>
              </a>
              <a 
                href="www.linkedin.com/in/samebinesar2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <div className="social-icon-wrapper">
                  <img src="/linkedin.png" alt="LinkedIn" />
                </div>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <div className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=samebinesar2004@gmail.com" target="_blank" rel="noopener noreferrer">samebinesar2004@gmail.com</a>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a href="tel:+916383011956">+91 6383011956</a>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Kollidam, Mayiladuthurai, Tamil Nadu, India</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Location</h4>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d489.00854181209075!2d79.72681086304702!3d11.329716019773539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1741760090459!5m2!1sen!2sin" 
                width="100%" 
                height="200"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="map-iframe"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} <span className="copyright-name">Sam Ebinesar S</span>. All rights reserved.
            </p>
            <p className="footer-address">
              No 153, Main Road, Manganampattu, Kollidam, Tamil Nadu, India - 609102
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

