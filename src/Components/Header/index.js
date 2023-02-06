import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/home">
              <a className="nav-link " href="">
                Home
              </a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/new-article">
              <a className="nav-link" href="">
                {" "}
                <i className="ion-compose"></i>&nbsp;New Article{" "}
              </a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings">
              <a className="nav-link" href="">
                {" "}
                <i className="ion-gear-a"></i>&nbsp;Settings{" "}
              </a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sign-in">
              <a className="nav-link" href="">
                Sign in
              </a>
            </NavLink>
          </li>

          <li className="nav-item">
            {" "}
            <NavLink to="/register">
              <a className="nav-link" href="">
                Register
              </a>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
