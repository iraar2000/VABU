import React from "react";
import "./ScholarshipCard.css"
import * as faIcons from "react-icons/fa6";
import * as biIcons from "react-icons/bi";
import * as riIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const icons = {
    ...faIcons,
    ...biIcons,
    ...riIcons
};

function ScholarshipCard ({scholarshipData}) {
    
    // the scholarship information
    const infoKeys = Object.keys(scholarshipData.information);

    return (
        <div className="scholarship-card">
            <div className="details-container">

                <div className="university-image">
                    <div className="image-wrapper">
                        <img src={`${scholarshipData.universityLogo}`} alt={`university-logo`} className="uni-image" />
                    </div>
                </div>

                <div className="scholarship-details">

                    {/* this is the name of the university which provided the scholarship*/}
                    <p className="university-name">{scholarshipData.universityName}</p>
                    
                    {/* this displays the funding, location, level and deadline information of the scholarship */}
                    <div className="scholarship-info">
                        {infoKeys.map((key, index) => (
                            <div key={`infoData-${index}`} className="info">
                                <p className="title">{key}:</p>
                                <p className="content">{scholarshipData.information[key]}</p>
                            </div>
                        ))}
                    </div>

                    {/* here we describe who the scholarship is for */}
                    <div className="scholarship-description">
                        <p className="description">{scholarshipData.details}</p>
                    </div>

                    {/* here we describe what the scholarship covers */}
                    <div className="scholarship-coverage">
                        <p className="coverage-title">Scholarship Covers:</p>
                        <div className="coverage-container">
                            {scholarshipData.coverage.map(coverage => {
                                var Icon = icons[coverage.icon];
                                return (
                                    <div className="coverage">
                                        <div className="cover-icon">{Icon && <Icon/>}</div>
                                        <p className="cover-name">{coverage.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="controll-buttons">
                    <Link to={"/"} className="to-contact-us ctrl-btn">Contact us</Link>
                    <a href={`${scholarshipData.universityWebsite}`} className="to-website ctrl-btn">Visit website</a>
                </div>
            </div>
        </div>
    )
}

export default ScholarshipCard;