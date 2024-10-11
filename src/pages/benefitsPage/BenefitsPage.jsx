import React from "react";
import { Link } from "react-router-dom";

import "./benefitsPage.css";
import Logo from "../../assets/Logo.png";
import Illustration1 from "../../assets/Agreement.png";
import Illustration2 from "../../assets/GoodDeal.jpg";


export default function BenefitsPage() {

    return (
        <div className = "benefits-page-container">
            <header>
                <nav className = "navbar">
                    <img src = {Logo} alt = "Fix-It-Logo" className = "Logo" />

                    <div className = "navbar-menu">
                        <Link to = "/service" className = "navbar-link-item">
                            Pro Service
                        </Link>
                        <Link to = "/USER_PAGE" className = "navbar-link-item">
                            Choose Your Service
                        </Link>
                        <div className = "navbar-menu-inner-div">
                        <Link to = "/auth">
                            <button type = "button" className = "btn-login">
                            Login
                            </button>
                        </Link>
                        <Link to = "/create">
                            <button type = "button" className = "btn-join">
                            Join
                            </button>
                        </Link>
                        </div>
                    </div>
                </nav>
            </header> 
            <main>
                <h1>Benefits of our services</h1>

                
                <div className = "second-horizontal-div">
                    <div className = "benefits-ul-li-style li-one">1</div>
                </div>

                <section className = "warranty-section">
                    <h2>Warranty</h2>
                    <img className = "float" src = {Illustration1} alt = "warranty illustration" />
                    <p>
                    At Fixit we prioritize your peace of mind by offering a robust warranty on all services provided through our platform. We understand that urgent repairs demand both speed and reliability, and our warranty assurance is designed to deliver just that. Here's what you can expect:
                    </p>
                    <ul>
                        <li>
                        <span>Comprehensive Coverage:</span> Our warranty covers all aspects of the repair service, ensuring that any issues related to the work performed are promptly addressed. Whether it's a recurring problem or an oversight, we've got you covered.
                        </li>
                        <li>
                        <span>Qualified Professionals:</span> Every technician in our network undergoes rigorous vetting to meet our high standards of quality and expertise. This means you can trust that the work is done right the first time.
                        </li>
                        <li>
                        <span>Prompt Response:</span> Should any issues arise after the initial repair, our dedicated customer support team is available 24/7 to assist you. We will promptly arrange for the necessary follow-up service at no additional cost.
                        </li>
                        <li>
                        <span>Satisfaction Guarantee:</span> If you are not completely satisfied with the service provided, we offer a hassle-free refund policy. Our goal is to ensure your complete satisfaction, and if we fall short, we will make it right with either a full refund or a reservice at no additional cost.
                        </li>
                    </ul>
                    <p>
                    Your satisfaction and trust are our top priorities. We stand behind the work of our skilled technicians and are committed to ensuring that your repairs are durable and reliable. With [Your Platform Name], you can have confidence that your urgent repair needs will be met with the highest standards of quality and service.
                    </p>
                </section>

                <div className = "first-horizontal-div">
                    <div className = "benefits-ul-li-style li-two">2</div>
                </div>

                <section className = "good-deal-section">
                    <h2>A Good Deal with Us</h2>
                    <img className = "float" src = {Illustration2} alt = "good deal with us illustration" />
                    <p>
                    Choosing Fixit means optingfor excellent value and convenience every time. We are dedicated to providing top-notch services at competitive rates, ensuring you get the best possible deal. Our transparent pricing model ensures that you know exactly what you're paying for, with no hidden fees or unexpected charges. To further enhance your experience, we offer a variety of discounts and special deals:
                    </p>
                    <ul>
                        <li>
                        <span>First-Time User Discount:</span> Enjoy a 15% discount on your first service when you sign up with us. 
                        </li>
                        <li>
                        <span>Loyalty Rewards:</span> Earn points with every service booked, which can be redeemed for future discounts or exclusive offers.
                        </li>
                        <li>
                        <span>Referral Program:</span> Refer friends and family to our platform and receive credits towards your next service for each successful referral.
                        </li>
                        <li>
                        <span>Seasonal Promotions:</span> Take advantage of our special seasonal promotions and limited-time offers to get even more value.
                        </li>
                    </ul>
                    <p>
                    By connecting you with top-rated professionals available at your requested time, we ensure that you receive prompt, high-quality service without breaking the bank. Our goal is to provide not only the urgent repair assistance you need but also to deliver exceptional value that respects your budget and exceeds your expectations. Trust Fixit for reliable, affordable service every time.
                    </p>
                </section>

                <div className = "third-horizontal-div"></div>

                <section className = "_get-started-section_">
                    <h2>Ready to get started?</h2>
                    <p>Join thousands of satisfied customers today</p>
                    <button>JOIN</button>
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
    )
}