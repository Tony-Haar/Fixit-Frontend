import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../../assets/Logo.png";
import "./authPage.css";
import Footer from "../../components/Footer";

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
    <>
      <div className="vh-100 bg-secondary d-flex justify-content-center align-items-center">
        <div className="auth-container bg-light w-50 p-4 rounded shadow">
          <div className="row align-items-center w-100">
            <div className="col">
              <img
                className="logo img-fluid"
                src={Logo}
                alt="LOGO"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </div>
            <div className="col text-end">
              <Link to="/home">
                <i
                  className="bi bi-house"
                  style={{
                    fontSize: "30px",
                    color: page === "signin" ? "#1f78b4ff" : "#023d7bff",
                  }}
                ></i>
              </Link>
            </div>
          </div>

          {page === "signin" ? (
            <h4 className="text-center">Sign In</h4>
          ) : (
            <h4 className="text-center">Sign up</h4>
          )}

          <div
            className="hr hr-1"
            style={
              page === "signin"
                ? { backgroundColor: "#1f78b4ff", borderColor: "#1f78b4ff" }
                : { backgroundColor: "#023d7bff", borderColor: "#023d7bff" }
            }
          ></div>

          <form className="sign-in-form w-100">
            <label>Email</label>
            <br />
            <input type="email" className="form-control" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" className="form-control" />
            <br />
            {page === "signup" && (
              <>
                <label>Re-enter Password</label>
                <br />
                <input type="password" className="form-control" />
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
                className="btn btn-primary w-100"
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
              New to the platform? <a href="/auth/signup">Create an account</a>
            </p>
          ) : (
            <p>
              Already have an account? <a href="/auth/signin">Sign in here</a>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AuthPage;
