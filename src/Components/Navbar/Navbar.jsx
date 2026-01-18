import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CHUNKY MONKEY</div>
      
      {/* Hamburger Icon */}
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><a href="#header" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#work" onClick={closeMenu}>Work</a></li>
        <li><a href="#payment" onClick={closeMenu}>Payment</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}
    </nav>
  );
}

export default Navbar;