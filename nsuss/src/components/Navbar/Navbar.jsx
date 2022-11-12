import React from "react";
import { Link } from "react-router-dom";
import Navbarlogo from "../../Assets/NavbarLogo.png";
import Classes from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={Classes.container}>
      <ul className={Classes.navmenu}>
        <img className={Classes.navbarlogo} src={Navbarlogo} alt={Navbarlogo} />
        <Link className={Classes.nounderline} to="/">
          <button className={Classes.navmenubtn}>Home</button>
        </Link>
        <Link className={Classes.nounderline} to="/adminloginpage">
          <button className={Classes.navmenubtn}>Admin Login</button>
        </Link>
        <Link className={Classes.nounderline} to="/userloginpage">
          <button className={Classes.navmenubtn}>User Login</button>
        </Link>
        <button className={Classes.navmenubtn}>Sign Up</button>
        <button className={Classes.navmenubtn}>Contact</button>
        <button className={Classes.navmenubtn}>About</button>
        <button className={Classes.navmenubtn}>FAQ</button>
      </ul>
    </div>
  );
}

export default Navbar;
