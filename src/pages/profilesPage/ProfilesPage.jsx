import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/Logo.png";
import "./profilesPage.css";
import serviceData from "../../db/servicesData";
import profilesData from "../../db/profilesData";
import serviceRelatedImageData from "../../db/relatedImageData";
import Button from "../../components/Button";
import Profile from "../../components/profile";
import RelatedImage from "../../components/relatedImage";

export default function ProfilesPage() {
  const professionalProfileData = profilesData["plumbing"];
  const RelatedImageData = serviceRelatedImageData["plumbing"];

  const selectedProfileNo = professionalProfileData.length;

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
      page="profile-page"
    >
      {service.service}
    </Button>
  ));

  const profileElements = professionalProfileData.map((profile) => (
    <Profile
      key={profile.id}
      name={profile.professional_name}
      rating={profile.rating}
      gig={profile.gig_short}
      image={profile.image}
    />
  ));

  const serviceRelatedImageElements = RelatedImageData.map((relative) => (
    <RelatedImage
      key={relative.id}
      image={relative.image}
      repair={relative.repair_short}
    />
  ));

  return (
    <div className="profiles-page-container">
      <header>
        <nav className="navbar">
          <img src={Logo} alt="Fix-It-Logo" className="Logo" />

          <div className="navbar-menu">
            <Link to="/service" className="navbar-link-item">
              Pro Service
            </Link>
            <Link to="/USER_PAGE" className="navbar-link-item">
              Choose Your Service
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
        <div style={style} className="header-reusable-button-div">
          {reusableButtonElements}
        </div>
      </header>
      <main>
        <section>
          <h1>Plumbing professionals</h1>
          <div className="sort-dropdown">
            <div>
              <label>Sort by: </label>
              <select id="sort-level">
                <option value="default">-Choose--</option>
                <option value="level1">High rated</option>
                <option value="level2">Level 2</option>
                <option value="level3">Level 3</option>
              </select>
            </div>
            <p>{selectedProfileNo}+ Results</p>
          </div>
          <div className="profile-displaying-container">{profileElements}</div>

          <div className="pagination-container">
            <FontAwesomeIcon icon={faAngleLeft} />
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </section>

        <div className="second-horizontal-div"></div>

        <section className="service-related-images-section">
          <h2>Service related images</h2>
          <div className="related-images-display-container">
            {serviceRelatedImageElements}
          </div>
        </section>

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
    </div>
  );
}
