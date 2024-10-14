import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="Fix-It-Logo" className="Logo" />

        <div className="navbar-menu">
          <Link to="/service">
            <a href="" className="navbar-link-item">
              Pro Service
            </a>
          </Link>
          <Link to="/home">
            <a href="" className="navbar-link-item">
              Choose Your Service
            </a>
          </Link>
          <div className="navbar-menu-inner-div">
            <Link to="/auth/signin">
              <button type="button" className="btn-login">
                Login
              </button>
            </Link>
            <Link to="/registration-form">
              <button type="button" className="btn-join">
                Become A Professional
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
