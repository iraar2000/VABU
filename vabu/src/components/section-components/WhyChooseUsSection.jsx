import React from "react"
import "./WhyChooseUsSection.css"
import WhyChooseUsCard from "@objcomponent/WhyChooseUsCard";

function WhyChooseUsSection() {

    const whyChooseUsData = [
        {icon:"IoMdCheckmarkCircleOutline", title: "Complete Application Guidance", content: "Receive support throughout the visa preparation and application process."},
        {icon:"HiClipboardDocument", title: "Document Assistance", content: "Get help organizing and preparing required documents correctly."},
        {icon:"TbWorld", title: "International Support", content: "Assistance for outbound travelers and incoming international visitors."},
        {icon:"MdUpdate", title: "Updated Requirements", content: "Stay informed about changing visa procedures and requirements."},
        {icon:"MdOutlineCalendarMonth", title: "Appointment Preparation", content: "Receive support throughout the visa preparation and application process."},
        {icon:"MdAirplanemodeActive", title: "Student & Travel Visas", content: "Receive support throughout the visa preparation and application process."},
    ]

    return (
        <section className="why-choose-us-section">
            <div className="wrapper-main-size wcu-section-container">
                <div className="wcu-section-heading">
                    <p className="heading">Why Choose Us</p>
                    <p className="subheading">We guide students and travelers through every step of the visa application process, ensuring accurate documentation, timely submissions, and professional support.</p>
                </div>
                <div className="wcu-section-content">
                    {whyChooseUsData.map((data, index) => <div className="card-wrapper" style={{animationDelay: `${0.1*index}s`}}><WhyChooseUsCard wcuData={data}/></div>)}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection;