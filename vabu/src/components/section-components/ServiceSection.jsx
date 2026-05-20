import React from "react";
import "./ServiceSection.css"
import ServiceCard from "@objcomponent/ServiceCard";

// the service section function
function ServiceSection() {

    const services = [
        {iconName: "FaCcVisa", link: "/visa", heading: "Visa Services", subHeading: "We offer a wide range of scholarship opportunities for students from different countries and provide full support throughout the application process."},
        {iconName: "FaGraduationCap", link: "/scholarships", heading: "Scholarship Services", subHeading: "We offer a wide range of scholarship opportunities for students from different countries and provide full support throughout the application process."},
        {iconName: "RiShipFill", link: "/shipping", heading: "Shipping Services", subHeading: "We offer a wide range of scholarship opportunities for students from different countries and provide full support throughout the application process."},
        {iconName: "BiSolidFactory", link: "/products", heading: "Product Sourcing Services", subHeading: "We offer a wide range of scholarship opportunities for students from different countries and provide full support throughout the application process."}
    ]

    return (
        <section className="service-section" id="service-section">
            <div className="wrapper-main-size section-container">
                {/* the section heading container */}
                <div className="section-heading">
                    <p className="heading">Service We Provide</p>
                    <p className="sub-heading">Professional, reliable, and customer-focused solutions tailored to simplify international processes, support your ambitions, and create seamless global opportunities for individuals and businesses worldwide.</p>
                </div>
                {/* the service card designs */}
                <div className="service-cards">
                    {services.map((service, index) => <ServiceCard key={`service-${index}`}  service={service}/>)}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;