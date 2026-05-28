import React from "react";
import "./VisaServiceListing.css"
import SearchComponent from "@objcomponent/SearchComponent";
import VisaCard from "@objcomponent/VisaCard";

function VisaServiceListing() {

    const visaDetails = [
        {icon:"src/assets/student visa image.jpg", heading:"student", description:"We assist students with the complete student visa application process, including document preparation, application guidance, interview preparation, and submission support for international studies."},
        {icon:"src/assets/transit visa image.webp", heading:"transit", description:"We assist students with the complete student visa application process, including document preparation, application guidance, interview preparation, and submission support for international studies."},
        {icon:"src/assets/visitor visa image.jpg", heading:"tourist", description:"We assist students with the complete student visa application process, including document preparation, application guidance, interview preparation, and submission support for international studies."},
        {icon:"src/assets/business visa image.png", heading:"business", description:"We assist students with the complete student visa application process, including document preparation, application guidance, interview preparation, and submission support for international studies."},
        {icon:"src/assets/evisa image.png", heading:"e-visa", description:"We assist students with the complete student visa application process, including document preparation, application guidance, interview preparation, and submission support for international studies."},
        {icon:"src/assets/work visa.jpg", heading:"work", description:"We assist students with the complete student visa application process, including document preparation, application guidance, interview preparation, and submission support for international studies."}
    ]

    const filterValues = {country:"select country", type:"select visa type"}

    return (
        <section className="visa-service-listing-section">
            <div className="vsl-section-container wrapper-main-size">
                <div className="vsl-section-heading">
                    <div className="heading">Explore Available Visa</div>
                    <div className="subheading">Explore available scholarships for undergraduate, postgraduate, diploma, and professional study programs in different countries.</div>
                </div>
                <div className="vsl-content-container">

                    {/* the search handling component */}
                    <SearchComponent filterValues={filterValues}/>

                    {/* visa listing container */}
                    <div className="visa-listing-container">
                        {visaDetails.map((detail, index) => 
                            <div key={`${detail.heading}-${index}`} className="animation-wrapper" style={{ animationDelay: `${index * 0.05}s` }}>
                                <VisaCard visaDetail={detail}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisaServiceListing;
