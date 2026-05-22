import React from "react";
import "./VisaCard.css"

// visa details will contain
//  1. visa icon
//  2. visa name
//  3. visa rules
//  4. visa duration

function VisaCard({visaDetail}) {
    return (
        <div className="visa-card" >
            <div className="visa-details-container">
                <div className="visa-icon">
                    <img src={`${visaDetail.icon}`} alt={`${visaDetail.heading}`} className="icon" />
                </div>
                <div className="visa-details">
                    <p className="heading">{visaDetail.heading} visa</p>
                    <p className="description">{visaDetail.description}</p>
                </div>
            </div>
            <button className="contact-us-btn">Contact Us</button>
        </div>
    )
}

export default VisaCard;