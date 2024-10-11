import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../../assets/Logo.png";
import "./authPage.css";

function AuthPage() {
  let { page } = useParams();
  const [isHovered, setIsHovered] = useState(false);

  const footerStyle = {
    width: "100%",
    height: "85px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    backgroundColor: page === "signin" ? "#1f78b4ff" : "#023d7bff",
    color: "white",
  };

  const buttonBaseStyle = {
    padding: "10px 30px",
    cursor: "pointer",
    marginBottom: "10px",
    backgroundColor: page === "signin" ? "#1f78b4ff" : "#023d7bff",
    borderColor: page === "signin" ? "#1f78b4ff" : "#023d7bff",
    borderStyle: "solid",
    color: "white",
  };

  const buttonHoverStyle = {
    backgroundColor: "white",
    color: page === "signin" ? "#1f78b4ff" : "#023d7bff",
  };

  return (
    <div className="auth-container">
      <div className="auth-core-container">
        <img className="logo" src={Logo} alt="LOGO" />

        {page === "signin" ? <h4>Sign In</h4> : <h4>Sign up</h4>}

        <div
          className="hr hr-1"
          style={
            page === "signin"
              ? { backgroundColor: "#1f78b4ff", borderColor: "#1f78b4ff" }
              : { backgroundColor: "#023d7bff", borderColor: "#023d7bff" }
          }
        ></div>

        <form className="sign-in-form">
          <label>Email</label>
          <br />
          <input type="email" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" />
          <br />
          {page === "signup" && (
            <>
              <label>Re-enter Password</label>
              <br />
              <input type="password" />
              <br />
            </>
          )}
          {page === "signin" ? (
            <p>
              By creating an account you agree to our
              <br />
              <a href="">Privacy</a> and <a href="">Terms.</a>
            </p>
          ) : (
            <p>
              <a href="">Forgot password?</a>
            </p>
          )}
          <div>
            <button
              type="submit"
              style={
                isHovered
                  ? { ...buttonBaseStyle, ...buttonHoverStyle }
                  : buttonBaseStyle
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {page === "signin" ? "SIGN IN" : "SIGN UP"}
            </button>
          </div>
        </form>

        <div
          className="hr"
          style={
            page === "signin"
              ? { backgroundColor: "#1f78b4ff", borderColor: "#1f78b4ff" }
              : { backgroundColor: "#023d7bff", borderColor: "#023d7bff" }
          }
        ></div>

        {page === "signin" ? (
          <p>
            New to the platform? <a href="">Create an account</a>
          </p>
        ) : (
          <p>
            Already have an account? <a href="">Sign in here</a>
          </p>
        )}
      </div>

      <footer style={footerStyle}>
        <a href="" className="social-media-icons">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="" className="social-media-icons">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="" className="social-media-icons">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </footer>
    </div>
  );
}

export default AuthPage;
