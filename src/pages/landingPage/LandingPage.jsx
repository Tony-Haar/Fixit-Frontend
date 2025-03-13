import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { serviceData } from "../../assets/assets";

import "./landingPage.css";
import Service from "../../components/service";
import Navbar from "../../components/Navbar";

function LandingPage() {
  const serviceElements = serviceData.map((service) => (
    <Service key={service.id} service={service.service} image={service.image} />
  ));

  return (
    <>
      <header>
        <Navbar />
        <div className="header-hero">
          <form action="" className="header-hero-form">
            <h1>Search For what fits you.</h1>

            <input type="text" placeholder="Search for any service" />
            <button type="submit" className="hero-btn">
              Search Icon
            </button>
          </form>
          <img src={assets.Illustration} alt="" />
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
        </div>

        <h1 className="offer-label">Offers</h1>
        <div className="line"></div>
        <section className="offer">
          <div className="offer-illustration">
            <img src={assets.Warranty} alt="Image Five" />
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
            <Link to="/benefits">
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
            <Link to="/benefits">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="pro-service-illustration">
            <img src={assets.GettheDeal} alt="Six Image" />
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
            We offer the best services ever that you can find in the market.
            <br />
            Here are some reasons why you should choose us.
          </p>
          <Link to="/benefits">
            <button>Learn More</button>
          </Link>
        </div>

        <hr />
      </main>

      <footer className="footer">
        <div className="footer-link-item-container">
          <a href="/about-us">About Us</a>
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
