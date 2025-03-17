import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar container-fluid navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            <img src={Logo} alt="Fix-It-Logo" className="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto navbar-menu text-center d-flex gap-0">
              <li className="nav-item">
                <Link
                  to="find-pro"
                  className="nav-link navbar-link-item fs-5 fs-md-6"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link navbar-link-item fs-5 fs-md-6"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item navbar-menu-inner-div d-flex flex-dm-column align-items-center gap-2 p-2">
                <Link to="/auth/signin" className="">
                  <button type="button" className="btn btn-login btn-sm">
                    Login
                  </button>
                </Link>
                <Link to="/registration-form" className="w-100">
                  <button type="button" className="btn btn-join btn-sm">
                    Become A Professional
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
