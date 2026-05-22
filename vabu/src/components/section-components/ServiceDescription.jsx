import React from 'react'
import ServiceDescriptionCard from '@objcomponent/ServiceDescriptionCard';
import './ServiceDescription.css'

function ServiceDescription() {
    const descriptions = [
        {
            image: "/src/assets/product sourcing image.png", 
            heading: "Product Sourcing Service", 
            subheading: "Finding international scholarships should not be complicated.", 
            descriptions:"From document preparation to application guidance, we help travelers, students, and professionals navigate visa processes with clarity, accuracy"
        },
        {
            image: "/src/assets/scholarship image.jpg", 
            heading: "Scholarship Service", 
            subheading: "Finding reliable products and manufacturers internationally can be expensive and difficult.", 
            descriptions:"We help students discover funded study opportunities, compare scholarships, and apply to universities abroad with confidence"
        },
        {
            image: "/src/assets/visa image.jpg", 
            heading: "Visa Service", 
            subheading: "Finding reliable products and manufacturers internationally can be expensive and difficult.", 
            descriptions:"We help students discover funded study opportunities, compare scholarships, and apply to universities abroad with confidence"
        },
        {
            image: "/src/assets/shiping image.jpg", 
            heading: "Shipping Service", 
            subheading: "Finding international scholarships should not be complicated.", 
            descriptions:"From document preparation to application guidance, we help travelers, students, and professionals navigate visa processes with clarity, accuracy"
        }
    ]

    return (
        // the service description section
        <section className='description-section'>
            <div className='wrapper-main-size description-section-container'>
                <div className='section-heading'>
                    <h2 className="heading">Our Professional Services</h2>
                    <p className="subheading">
                    We provide reliable, efficient, and globally focused solutions designed to support individuals and businesses
                    through every step of their journey — from documentation to delivery.
                    </p>
                </div>
                <div className="service-wrapper">
                    <ServiceDescriptionCard description={descriptions[0]}/>
                    <ServiceDescriptionCard description={descriptions[1]}/>
                    <ServiceDescriptionCard description={descriptions[2]}/>
                    <ServiceDescriptionCard description={descriptions[3]}/>
                </div>
            </div>
        </section>
    )
}

export default ServiceDescription;
