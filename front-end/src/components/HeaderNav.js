import React from "react";
import logo from "../images/qms_logo.png";
import { Link } from "react-router-dom";
function HeaderNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <img src={logo} width="35" alt="Logo" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="./AboutUs.js"
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="./SignIn.js"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="new-link active"
                aria-current="page"
                to="./ModuleList.js"
              >
                Modules
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNav;
