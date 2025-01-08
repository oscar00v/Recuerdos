import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo Recuerdos Mariposa.png'; // Importa la imagen
import './Navbar.scss';
function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img src={logo} alt="Logo Recuerdos Mariposa" />
      </NavLink>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/producto">Productos</NavLink></li> 
        <li><NavLink to="/artes">Artes</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
