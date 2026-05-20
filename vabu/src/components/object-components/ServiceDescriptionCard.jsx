import React from 'react'
import './ServiceDescriptionCard.css'
import {
    FaCircleCheck,
    FaTruckFast,
    FaBox,
    FaGlobe,
    FaShieldHalved
} from "react-icons/fa6";

function ServiceDescriptionCard({description}) {

    const descriptionList = description.descriptions.split(',');

    return (
        <div className='description-card'>
            <div className='description-card-image'>
                <img className='dc-image' src={`${description.image}`}/>
            </div>

            <div className='description-card-content'>
                <div className="description-card-headings">

                    <div className="heading-subheading">

                        {/* top heading section */}
                        <p className="heading">{description.heading}</p>
                    </div>
                    {/* 
                    <ul className="description-card-list">
                        {descriptionList.map(descript =>
                            <li className='description-list-content'>
                                <FaCircleCheck className='check'/>
                                <p className='content'>{descript}</p>
                            </li>
                        )}
                    </ul> */}

                    {/* icons container */}
                    <div className="service-icons">
                        <div className='services'>
                            <FaTruckFast className='service-icon'/>
                            <div className="highlight">Fast Delivery</div>
                        </div>

                        <div className='services'>
                            <FaBox className='service-icon'/>
                            <div className="highlight">Secure Packaging</div>
                        </div>

                        <div className='services'>
                            <FaGlobe className='service-icon'/>
                            <div className="highlight">Global Shipping</div>
                        </div>

                        <div className='services'>
                            <FaShieldHalved className='service-icon'/>
                            <div className="highlight">Real-Time Support</div>
                        </div>
                        <div className='services'>
                            <FaBox className='service-icon'/>
                            <div className="highlight">Secure Packaging</div>
                        </div>
                    </div>

                </div>

                <div className="description-card-buttons">
                    <div className="contactUs-btn">contact us</div>
                    <div className="gotoWebsite-btn">visit page</div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDescriptionCard;
