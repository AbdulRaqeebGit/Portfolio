import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <h1>A.Raqeeb</h1>
      </div>

      {/* Links (Desktop) */}
      <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        <ul>
          <li>
            <NavLink to="/home" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.activeLink : styles.link}>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon (only for tablet & mobile) */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </div>
  )
}

export default Navbar
