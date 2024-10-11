import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./professionalProfilePage.css";
import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import Paint from "../../assets/painting.png";
import Mechanic from "../../assets/mechanic.png";
import Plumbing from "../../assets/plumbing.png";

function ProfessionalProfilePage() {
  return (
      <div className="professional-profile-page-container">
        <header>
            <nav className = "home-nav">
                <img src = {Logo} alt = "" className = "nav--logo" />
                <ul className = "nav-ul-list">
                    <li>
                    <a href = "">how it works</a>
                    </li>
                    <li>
                    <a href = "">Professional profiles</a>
                    </li>
                    <li>
                    <button className = "service-proposer-btn">
                        SWITCH TO PROFESSIONAL
                    </button>
                    </li>
                    <li>
                    <button className = "Log-out-btn">LOG OUT</button>
                    </li>
                    <img src = {Profile} className = "user-profile" />
                </ul>
            </nav>
        </header>
        <main className="main-container">
            <h1>
              I will help you out with everything <br />
              plumbing
            </h1>
            <div className="main-inner-container">
              <div className="professional-details-container">
                <section className="professional-details-inner-container">
                  <img src={Profile} alt="professional image" />
                  <div className="professional-info">
                    <h5>Yvan Kwame</h5>
                    <p>20 Repairs</p>
                    <div className = "professional-info-rating">
                      <FontAwesomeIcon icon={faStar} />
                      <p>4.8</p>
                    </div>
                  </div>
                </section>

                <p className="about-professional">
                  Experienced and certified plumber with over 15 years in the plumbing industry,
                  specializing in residential and commercial plumbing systems. Adept at installing,
                  repairing, and maintaining a wide variety of plumbing fixtures and systems. Recognized for
                  excellent problem-solving skills and a commitment to customer satisfaction.
                </p>

                <section className="professional-expertise-container">
                  <p className="expertise">
                    Installing and repairing faucets, sinks, showers, and
                    bathtubs
                  </p>
                  <p className="expertise">
                    Replacing outdated or damaged fixtures
                  </p>
                  <p className="expertise">
                    Upgrading to water-saving fixtures
                  </p>
                  <p className="expertise">
                    Installing new plumbing fixtures
                  </p>
                  <p className="expertise">
                    Sewer line repair and replacement
                  </p>
                </section>

                <section className="review-section">
                  <div className = "review-section-header">
                    <h3>What people loved about this professional</h3>
                    <a href = "">See all reviews</a>
                  </div>
                  <div className="review-card">
                    <div className="review-card-rating">
                      <div className = "review-card-profile">J</div>
                      <h5>June Olade</h5>
                      <div className = "vertical-separator"></div>
                      <div className = "rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <h3>5</h3>
                      </div>
                    </div>
                    <p>
                      I recently had the pleasure of working
                      with John Mitchell from ABC Plumbing
                      Services to repair my kitchen sink, and I
                      couldn't be more satisfied with
                      the experience. From start to finish, Jo...
                    </p>
                  </div>
                </section>

                <section className = "portfolio-section">
                    <h3>Portfolio</h3>
                    <div className = "portfolio-images-container">
                        <img src={Plumbing} alt="professional image" />
                        <img src={Mechanic} alt="professional image" />
                        <img src={Paint} alt="professional image" />
                    </div>
                </section>
              </div>

              <div className = "messages-container">
                <h3>Messaging</h3>
                <div className = "message-display-container">
                  <div className = "message-display-inner-container">
                    <p className = "pro-message">At which time the would like the fix?</p>
                    <p className = "user-message">
                      As i told you my sink right now need to be <br />
                      fix and in the bathroom there are some job to be done.
                    </p>
                    <p className = "pro-message">
                      Alright sorry for any inconvenience of misunderstanding
                    </p>
                    <p className = "pro-message">Can i have some picture ?</p>
                    <p className = "user-message">please, give me one second</p>
                  </div>
                  <form>
                    <textarea />
                    <div>
                      <button type = "submit">SEND</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

        </main>

        <footer className = "footer">
          <div className = "footer-link-item-container">
            <a href = "">About Us</a>
            <a href = "">Terms Of Services</a>
            <a href = "">Privacy Policy</a>
            <a href = "">Help & Support</a>
          </div>
            <h3>&copy; FIXit, ALL RIGHTS RESERVED</h3>
          <hr />
        </footer>
      </div>
  );
}
export default ProfessionalProfilePage;
