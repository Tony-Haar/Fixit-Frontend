import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import StepImage from "../../assets/step.png";
import "./homePage.css";
import YaleGear from "../../../../docs/yale-gear.svg";
import HonoluluGear from "../../../../docs/honolulu-gear.svg";
import Service from "../../components/service";
import serviceData from "../../db/servicesData";
import Button from "../../components/Button";

function HomePage() {
  const serviceElements = serviceData.map((service) => (
    <Service key={service.id} service={service.service} image={service.image} />
  ));

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "30px",
    marginLeft: "30px",
    marginRight: "30px",
  };

  const reusableButtonElements = serviceData.map((service) => (
    <Button
      key={service.id}
      variant={service.id % 2 == 0 ? "yale-blue" : "honolulu-blue"}
    >
      {service.service}
    </Button>
  ));

  return (
    <div className="home-page-container">
      <header>
        <nav className="home-nav">
          <img src={Logo} alt="" className="nav--logo" />
          <ul className="nav-ul-list">
            <Link to="/how-it-works">
              <a href="">how it works</a>
            </Link>
            <li>
              <a href="">Professional profiles</a>
            </li>
            <li>
              <button className="service-proposer-btn">
                SWITCH TO PROFESSIONAL
              </button>
            </li>
            <li>
              <button className="Log-out-btn">LOG OUT</button>
            </li>
            <img src={Profile} className="user-profile" />
          </ul>
        </nav>
        <div className="header-hero home-hero">
          <div>
            <h1>Welcome To Fixit</h1>
            <p>
              Connecting you with qualified professionals for quick assistance.
            </p>
            <form action="">
              <select name="domains" id="domain-select">
                <option value="">--Please select the repair domain--</option>
                <option value="Masonary">Masonary</option>
                <option value="Tiling">Tiling</option>
                <option value="Electricity">Electricity</option>
                <option value="Mechanics">Mechanics</option>
                <option value="Electronics">Mechanics</option>
              </select>
              <select name="services" id="service-select">
                <option value="">--select the service type--</option>
                <option value="Masonary ">block and stone repair</option>
                <option value="Masonary">concrete façade repair</option>
                <option value="Masonary">
                  stone and brick repointing, wall rebuilds
                </option>
                <option value="Tiling">fixing loose or broken tiles</option>
                <option value="Electronics">
                  repairs of electronic device, TV fixing, computer
                </option>
              </select>
              <br />
              <input type="submit" value="FIND A PROFESSIONAL" />
            </form>
          </div>
          <div className="gears-container">
            <div className="custom-div-1">
              <div className="custom-div-2">
                <img
                  src={HonoluluGear}
                  width="200px"
                  className="honolulu-gear"
                />
              </div>
            </div>
            <img src={YaleGear} width="300px" className="yale-gear" />
          </div>
        </div>
      </header>

      <div className="first-horizontal-div"></div>

      <main>
        <section className="category-section">
          <h1>Our available domains</h1>
          <p>know more about what we offer for each domains</p>
          <div className="horizontal-images home-card-container">
            {serviceElements}
          </div>
        </section>

        <div className="second-horizontal-div"></div>

        <section className="reusable-btn-section">
          <h1>Want to see Professionals profiles?</h1>
          <p>click any domain service</p>
          <div style={style}>{reusableButtonElements}</div>
        </section>

        <div className="third-horizontal-div"></div>

        <section className="how-it-works-section">
          <h1>How it works</h1>
          <div className="inner-section">
            <div>
              <ol>
                <li>Post Your Repair Need</li>
                <div>
                  <FontAwesomeIcon icon={faList} />
                  <p>Describe your issue in detail.</p>
                </div>
                <li>Connect with a Professional</li>
                <div>
                  <FontAwesomeIcon icon={faWifi} />
                  <p>Receive bids and choose the best pro.</p>
                </div>
                <li>Get it Fixed</li>
                <div>
                  <FontAwesomeIcon icon={faScrewdriverWrench} />
                  <p>Schedule and complete your repair.</p>
                </div>
                <li>Be satisfied</li>
                <div>
                  <FontAwesomeIcon icon={faHandshakeAngle} />
                  <p>Have a great day!</p>
                </div>
              </ol>
              <Link to="/how-it-works">
                <button>LEARN MORE</button>
              </Link>
            </div>
            <img src={StepImage} alt="" />
          </div>
        </section>

        <div className="fourth-horizontal-div"></div>

        <section className="get-started-section">
          <h1>Ready to get started?</h1>
          <p>Join thousands of satisfied customers today</p>
          <button>JOIN</button>
        </section>

        <div className="fifth-horizontal-div"></div>

        <section className="reasons-section">
          <h1>Why using our platform?</h1>
          <p>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            XXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXX.
          </p>
          <button>Learn More</button>
        </section>
      </main>

      <div className="sixtth-horizontal-div"></div>

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
    </div>
  );
}
export default HomePage;
