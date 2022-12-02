import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarLogo from "../../../src/Assets/NavbarLogo.png";
import Classes from "./Navbar.module.css";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  let studAuth = false;
  
    if(auth){
      const studID = parseInt(JSON.parse(window.localStorage.getItem("user")).userid);
      if (studID > 1000000000 && studID < 9999999999) {
        studAuth = true;
      } else studAuth = false;
    }



  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/userloginpage");
  };
  return (
    <div className={Classes.container}>
      <ul className={Classes.navul}>
        <li className={Classes.navmenubtn}>
          <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to="/"
          >
            <img
              className={Classes.navbarlogo}
              src={NavbarLogo}
              alt={NavbarLogo}
            />
          </Link>
        </li>

        <li className={Classes.li}>
          {" "}
          <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to="/"
          >
            Home
          </Link>
        </li>

        <li className={Classes.li}>
          {" "}
          <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to=""
          >
            Contact
          </Link>
        </li>
        <li className={Classes.li}>
          {" "}
          <Link
            className={[Classes.nounderline, Classes.navbarli].join(" ")}
            to=""
          >
            About
          </Link>
        </li>

        <li className={Classes.li}>
          {" "}
          {studAuth ? (
            <Link
              className={[Classes.nounderline, Classes.navbarli].join(" ")}
              to="/dashboardpage"
            >
              Dashboard
            </Link>
          ) :null}
        </li>

        <li className={Classes.li}>
          {" "}
          {auth ? (
            <Link
              onClick={logout}
              className={[
                Classes.nounderline,
                Classes.navbarli,
                Classes.navbarlilogout,
              ].join(" ")}
              to="/userloginpage"
            >
              Log Out
            </Link>
          ) : (
            <Link
              className={[Classes.nounderline, Classes.navbarli].join(" ")}
              to="/userloginpage"
            >
              Log In
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
