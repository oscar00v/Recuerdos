import React from "react";
import { NavLink } from "react-router-dom";
import useNavbar from "../../hooks/UseNavbar";
import logo from "../../assets/images/Logo Recuerdos Mariposa.png";
import homeIcon from "../../assets/icons/HomeIcon.svg";
import packageIcon from "../../assets/icons/PackageIcon.svg";
import imageIcon from "../../assets/icons/ImageIcon.svg";
import userIcon from "../../assets/icons/UserIcon.svg";
import cartIcon from "../../assets/icons/CartIcon.svg";
import "./Navbar.scss";

const menuItem = [
  { id: 1, icon: homeIcon, label: "Home", path: "/" },
  { id: 2, icon: packageIcon, label: "Productos", path: "/producto" },
  { id: 3, icon: imageIcon, label: "Arte", path: "/artes" },
  { id: 4, icon: userIcon, label: "Profile", path: "/Login" },
  { id: 5, icon: cartIcon, label: "Cart", path: "/ShoppingCart" },
];

const Navbar = () => {
  const { activeIndex, setActiveIndex, indicatorRef, menuRef } = useNavbar(menuItem);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img src={logo} alt="Logo Recuerdos Mariposa" />
      </NavLink>
      <ul ref={menuRef}>
        {menuItem.map((item, index) => (
          <li key={item.id}>
            <NavLink
              to={item.path} // Asegura que cada link tenga su ruta correcta
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : ""}
            >
              <img src={item.icon} alt={item.label} className="navbar__icon" />
              {item.label}
            </NavLink>
          </li>
        ))}
        <div ref={indicatorRef} className="indicator">
          <div className="indicator-box"></div>
          {/* <div className="indicator-box"></div> */}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;



// function Navbar() {
//   return (
//     <nav className="navbar">
//       <NavLink to="/" className="navbar__logo">
//         <img src={logo} alt="Logo Recuerdos Mariposa" />
//       </NavLink>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/producto">Productos</NavLink></li>
//         <li><NavLink to="/artes">Artes</NavLink></li>
//         <li><NavLink to="/login">Login</NavLink></li>
//         <li><NavLink to="/signup">Signup</NavLink></li>
//       </ul>
//     </nav>
//   );
// }


