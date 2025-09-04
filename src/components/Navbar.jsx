import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>A.Raqeeb</h1>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <NavLink to="/home" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
