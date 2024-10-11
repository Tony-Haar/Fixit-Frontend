import React from "react";

import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import ProfessionalPositionData from "../../db/proPositionData";
import serviceData from "../../db/servicesData";
import Button from "../../components/Button";
import Position from "../../components/proPosition";
import { isWithinRange, haversineDistance } from "../../components/GeoUtils";
import "./findProfessionalPage.css";


export default function FindProfessionalPage() {
    // let's work with static position of a client
    const clientPositionCoordinates = {latitude: 6.465422,longitude: 3.406448}
    const range = 200; // 200 meters square range

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
            page = {service.id != 4 ? "find-pro" : ""}
        >
          {service.service}
        </Button>
    ));

    // Filter professionals who are within the range and calculate distances
    const professionalsInRange = ProfessionalPositionData.filter(professional =>
        isWithinRange(professional.position_coordinates, clientPositionCoordinates.latitude, clientPositionCoordinates.longitude, range)
    ).map(professional => ({
        ...professional,
        distance: haversineDistance(clientPositionCoordinates, professional.position_coordinates)
    }));

    // Sort professionals by distance
    professionalsInRange.sort((a, b) => a.distance - b.distance);

    const proPositionElements = professionalsInRange.map((position, index) => (
        <Position
            key = {position.id}
            proName = {position.professional_name}
            rating = {position.rating}
            gig = {position.gig_short}
            proImage = {position.image}
            connectivity = {position.connection}
            positionCoordinates = {position.position_coordinates}
            distance = {position.distance}
            position = {index + 1}
        />
    ));

    return(
        <div className = "find-pro-container">
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
                <h1>Voilà! Here we go! the nearest Professionals</h1>
                <h4 className = "subtitle">
                    click any location dot and see the professional profile.<br/>feel free to exchange with him
                </h4>

                <section className = "legend">
                    <div className = "legend-items-container">
                        <div className="markers marker-1"></div>
                        <p className = "labels">the professional is online</p>
                    </div>
                    <div className = "legend-items-container">
                        <div className="markers marker-2"></div>
                        <p className = "labels">the professional is offline</p>
                    </div>
                </section>

                <section className = "map-section">
                    <div className = "map-container">
                        <img src = {Profile} className = "user-profile" />
                        {proPositionElements}
                    </div>
                </section>

                <div className = "second-horizontal-div"></div>

                <section className="reusable-btn-section">
                    <h1>Want to pick Professional from<br/>all our Professionals Profiles?</h1>
                    <p>click any domain service</p>
                    <div style={style}>{reusableButtonElements}</div>
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
