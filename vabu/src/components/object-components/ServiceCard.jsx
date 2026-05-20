import React from "react";
import * as faIcons from "react-icons/fa6";
import * as biIcons from "react-icons/bi";
import * as riIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import "./ServiceCard.css"

const icons = {
    ...faIcons,
    ...biIcons,
    ...riIcons
};

function ServiceCard({service}) {

    const  Icon = icons[service.iconName];

    return (
        <div className="service-card">
            <div className="service-icon">
                {Icon && <Icon/>}
            </div>
            <div className="service-content">
                <p className="service-heading">{service.heading}</p>
                <p className="service-subheading">{service.subHeading}</p>
            </div>
            <Link to={`${service.link}`}className="seemore-btn">see more</Link>
        </div>
        
    )
}

export default ServiceCard;