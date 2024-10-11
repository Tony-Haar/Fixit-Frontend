import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

import Illustration from "../../assets/illustration.png";
import DealImage from "../../assets/getthedeal.png";
import WarrantyImage from "../../assets/warranty.webp";

import "./landingPage.css";
import serviceData from "../../db/servicesData";
import Service from "../../components/service";

function LandingPage() {
  const serviceElements = serviceData.map((service) => (
    <Service key={service.id} service={service.service} image={service.image} />
  ));

  return (
    <>
      <header>
        <nav className="navbar">
          <img src={Logo} alt="Fix-It-Logo" className="Logo" />

          <div className="navbar-menu">
            <Link to="/service">
              <a href="" className="navbar-link-item">
                Pro Service
              </a>
            </Link>
            <Link to="/USER_PAGE">
              <a href="" className="navbar-link-item">
                Choose Your Service
              </a>
            </Link>
            <div className="navbar-menu-inner-div">
              <Link to="/auth">
                <button type="button" className="btn-login">
                  Login
                </button>
              </Link>
              <Link to="/create">
                <button type="button" className="btn-join">
                  Join
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="header-hero">
          <form action="" className="header-hero-form">
            <h1>H1 Phrase</h1>

            <input type="text" placeholder="Search for any service" />
            <button type="submit" className="hero-btn">
              Search Icon
            </button>
          </form>

          {/* <div className="hero-illustration">
					different dynamic casual jobs illustrations t hat changes each
					defined time.
				</div> */}
          <img src={Illustration} alt="" />
        </div>
      </header>

      <div className="partners-container">
        <p>in case we got partners, here they will be displayed horizontally</p>
      </div>

      <main className="landing-page-main-container">
        <div className="services-display-container">
          <h1>Services</h1>
          <div className="line"></div>
          <div className="horizontal-images">{serviceElements}</div>
          {/* <div className="horizontal-images">
						<img src={image1} alt="Image One" />
						<img src={image2} alt="Image Two" />
						<img src={image3} alt="Image Three" />
						<img src={image4} alt="Image Four" />
					</div> */}
        </div>

        <h1 className="offer-label">Offers</h1>
        <div className="line"></div>
        <section className="offer">
          <div className="offer-illustration">
            <img src={WarrantyImage} alt="Image Five" />
          </div>
          <div className="offer-inner-right-container">
            <div>
              <h1>WARRANTY ASSURANCE</h1>
            </div>
            <p>
              in each point H2 and H3 provide and explain <br />
              each offer for both the customer user and service <br />
              proposer
            </p>
            <Link to = "/benefits">
              <button>Learn More</button>
            </Link>
          </div>
        </section>

        <section className="pro-service">
          <div className="pro-service-inner-left-container">
            <div>
              <h1>GOOD DEAL WITH US</h1>
            </div>
            <p>
              in each point H2 and H3 provide and explain <br />
              each Pro service for both the customer user <br />
              and service proposer
            </p>
            <Link to = "/benefits">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="pro-service-illustration">
            <img src={DealImage} alt="Six Image" />
          </div>
        </section>

        <div className="testimonies-container">
          <p>
            In case we got testimonies, here where they will be displayed
            horizontally
          </p>
        </div>

        <div className="reasons-container">
          <h1>Why using our platform?</h1>
          <div className="line"></div>
          <p>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            XXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXX.
          </p>
          <Link to = "/benefits">
            <button>Learn More</button>
          </Link>
        </div>

        <hr />
      </main>

      <footer className="footer">
        <div className="footer-link-item-container">
          <a href="">About Us</a>
          <a href="">Terms Of Services</a>
          <a href="">Privacy Policy</a>
          <a href="">Help & Support</a>
        </div>
        <h3>&copy; FIXit, ALL RIGHTS RESERVED</h3>
        <hr />
      </footer>
    </>
  );
}

export default LandingPage;
