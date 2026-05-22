import React from "react";
import "./FooterSection.css"
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

function FooterSection() {
    return (
        <section className="footer-section">
            <div className="wrapper-main-size footer-section-container">
                <div className="footer-company-description">
                    <div className="company-name-logo">
                        <img src="public/logo.png" alt="logo" className="company-logo" />
                        <p className="company-name">VABU Business Group</p>
                    </div>
                    <p className="description">Contact us for our services, all we do is making sure you are satisfied with our effort</p>
                    <div className="social-media-link">
                        <a href="https://wa.me/" className="social-icon whatsapp"><IoLogoWhatsapp/></a>
                        <a href="https://facebook.com" className="social-icon facebook"><IoLogoFacebook/></a>
                        <a href="https://instagram.com" className="social-icon instagram"><IoLogoInstagram/></a>
                        <a href="https://email.com" className="social-icon email"><MdEmail/></a>
                    </div>
                </div>
                <div className="footer-web-navigation">
                    <div className="navigators-container">
                        <p className="navigators-title">Services</p>
                        <ul className="services-links">
                            <li className="navigation-link">
                                <Link to={'/scholarships'} className="link">Scholarship services</Link>
                            </li>
                            <li className="navigation-link">
                                <Link to={'/products'} className="link">Product Sourcing services</Link>
                            </li>
                            <li className="navigation-link">
                                <Link to={'/visas'} className="link">Visa services</Link>
                            </li>
                            <li className="navigation-link">
                                <Link to={'/shipping'} className="link">Shipping Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navigators-container">
                        <p className="navigators-title">Company</p>
                        <ul className="services-links">
                            <li className="navigation-link">
                                <Link to={'/aboutus'} className="link">About VABU</Link>
                            </li>
                            <li className="navigation-link">
                                <Link to={'/aboutus'} className="link">Our Team</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navigators-container">
                        <p className="navigators-title">Support</p>
                        <ul className="services-links">
                            <li className="navigation-link">
                                <Link to={'/scholarships'} className="link">Contact Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterSection
