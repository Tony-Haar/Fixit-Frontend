import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import "./HIWPage.css";


export default function HIWPage() {

    return (
        <div className = "how-it-works-container">
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

            <main>
                <h1>How It Works?</h1>
                <h4>
                    A simple, three-step process to get your repairs done<br/> quickly and efficiently
                </h4>

                <section>
                    <div className = "steps-section">
                        <h2>1 - Post your repair need</h2>
                        <h3>Select the service domain and type.</h3>
                        <div className = "step-explanation-container step-1">
                            <p>
                                Choose the appropriate service domain and type from the dropdown menus, then click 'Search' to find professionals near you. Once you select a professional, you can provide more details about the issue, including images and videos.
                            </p>
                            <FontAwesomeIcon icon = {faList} className = "steps-illustration-icon one"/>
                        </div>
                    </div>
                    <div className="attached-line-decor"></div>
                </section>
                <section>
                    <div className = "attached-line-decor"></div>
                    <div className = "steps-section step-2-section">
                        <h2>2 - Connect with a Professional</h2>
                        <h3>Receive bids and exchange details.</h3>
                        <div className = "step-explanation-container step-2">
                            <p>
                                View profiles of professionals, check their ratings, reviews, and credentials. Exchange messages to discuss the repair details, share images or videos, and negotiate terms such as price and materials needed.
                            </p>
                            <FontAwesomeIcon icon = {faWifi} className = "steps-illustration-icon two"/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className = "steps-section">
                        <h2>3 - Get It Fixed</h2>
                        <h3>Schedule and complete your repair.</h3>
                        <div className = "step-explanation-container step-3">
                            <p>
                            After finalizing the details with your chosen professional, schedule an appointment to get the repair done. Ensure the work is completed to your satisfaction and leave a review for the professional.
                            </p>
                            <FontAwesomeIcon icon = {faHandshakeAngle} className = "steps-illustration-icon three"/>
                        </div>
                    </div>
                    <div className = "attached-line-decor"></div>
                </section>

                <div className = "third-horizontal-div"></div>

                <section className = "_get-started-section_">
                    <h2>Ready to get started?</h2>
                    <p>
                        It's quick and easy to get the help you need.<br/> Post your repair request today and get<br/> connected with top-rated professionals in your area.
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
                            <option value="Masonary">stone and brick repointing, wall rebuilds</option>
                            <option value="Tiling">fixing loose or broken tiles</option>
                            <option value="Electronics">repairs of electronic device, TV fixing, computer</option>
                        </select>
                        <br />
                        <input type = "submit" value = "FIND A PROFESSIONAL" />
                    </form>
                </section>

                <hr />
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
    )
}