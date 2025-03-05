import React, { useState } from "react";
// import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo Recuerdos Mariposa.png";

import homeIcon from "../../assets/icons/HomeIcon.svg";
import productIcon from "../../assets/icons/PackageIcon.svg";
import artsIcon from "../../assets/icons/ImageIcon.svg";
import loginIcon from "../../assets/icons/UserIcon.svg";
// import signupIcon from "../../assets/icons/SignupIcon.svg";
import cartIcon from "../../assets/icons/CartIcon.svg";
import menuIcon from "../../assets/icons/Menu.svg"; // Ícono de menú hamburguesa
import closeIcon from "../../assets/icons/Close.svg"; // Ícono para cerrar menú


// import "./Navbar.scss";
import "./Navbar2.scss";
function Navbar2() {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar__logo">
                <img src={logo} alt="Logo Recuerdos Mariposa" />
            </NavLink>

            {/* Botón de menú para móviles */}
            {/* <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menuOpen ? closeIcon : menuIcon} alt="Menu" />
            </button> */}
            <ul>
                <li><NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
                    <img src={homeIcon} alt="HOME" />
                    Home
                </NavLink>
                </li>
                <li> <NavLink to="/producto" className={location.pathname === "/producto" ? "active" : ""}>
                    <img src={productIcon} alt="Products" />
                    Productos
                </NavLink>
                </li>
                <li><NavLink to="/artes" className={location.pathname === "/artes" ? "active" : ""}>
                    <img src={artsIcon} alt="" />
                    Artes
                </NavLink>
                </li>
                <li><NavLink to="/login" className={location.pathname === "/login" ? "active" : ""}>
                    <img src={loginIcon} alt="Login" />
                    Login
                </NavLink>
                </li>
                {/* <li><NavLink to="/signup">Signup</NavLink></li> */}
                <li><NavLink to="/ShoppingCart" className={location.pathname === "/ShoppingCart" ? "active" : ""}>
                    <img src={cartIcon} alt="Cart" />
                    Cart
                </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar2;