import React from "react";

import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import domainServiceData from "../../db/domainServiceData";
import DomainService from "../../components/DomainService";
import "./domainServiceDetailPage.css";


export default function DomainServiceDetailPage() {

    const domainServiceDataElement = domainServiceData.map((domainservice) => (
        <DomainService 
            key = {domainservice.id}
            image = {domainservice.image}
            servicetype = {domainservice.service_type}
            serviceslist = {domainservice.services_list}
        />
    ))

    return (
        <div className = "service-detail-container">
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
                <h1>Carpentry</h1>
                <h4 className = "subtitle">
                    Feel free to go through our Carpentry services catalog<br/ >
                    to understand what you can expect from us.
                </h4>

                <div className = "domain-service-displaying-container">
                    {domainServiceDataElement}
                </div>

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