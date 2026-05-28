import React from "react";
import "./ScholarshipListingSection.css"
import SearchComponent from "@objcomponent/SearchComponent";
import ScholarshipCard from "@objcomponent/ScholarshipCard";

function ScholarshipListingSection() {
    
    const filterValues = {country:"select country", type:"select university", field:"select field"}

    const scholarships = [
        {
            universityLogo: "src/assets/uni12.jpg", 
            universityName : "Ocean University Of China",  
            universityWebsite: "https://www.youtube.com",
            information: {
                location: "China",
                level: "undergraduate", 
                deadline: "01/10/2026", 
                "funding type" : "Full scholarship"
            },
            details: "This scholarship is eligible for any International students with strong academic performance.",
            coverage: [
              { icon: "FaMoneyBillWave", name: "Monthly stipend"},
              { icon: "FaHandHoldingMedical", name: "Medical insurance"},
              { icon: "FaUserGraduate", name: "Tuition fees"},
              { icon: "FaBed", name: "Accommodation"},  
            ]
        },
        {
            universityLogo: "src/assets/uni7.png", 
            universityName : "Wuhan University Of China", 
            universityWebsite: "https://www.youtube.com",
            information: {
                location: "China",
                level: "undergraduate", 
                deadline: "01/10/2026", 
                funding_type : "Full scholarship"
            },
            details: "This scholarship is eligible for any International students with strong academic performance.",
            coverage: [
              { icon: "FaMoneyBillWave", name: "Monthly stipend"},
              { icon: "FaHandHoldingMedical", name: "Medical insurance"},
              { icon: "FaUserGraduate", name: "Tuition fees"},
              { icon: "FaBed", name: "Accommodation"},  
            ]
        }
    ]

    return (
        <section className="scholarship-listing-section">
            <div className="schl-section-container wrapper-main-size">
                <div className="schl-section-heading">
                    <div className="heading">Explore Available Scholarships</div>
                    <div className="subheading">Explore available scholarships for undergraduate, postgraduate, diploma, and professional study programs in different countries.</div>
                </div>
                <div className="schl-content-container">

                    {/* the search handling component */}
                    <SearchComponent filterValues={filterValues}/>

                    {/* visa listing container */}
                    <div className="schl-listing-container">
                        {scholarships.map((scholarship, index) => <div className="card-wrapper" style={{animationDelay:`${0.1*index}s`}}><ScholarshipCard key={`${scholarship.universityName}-${index}`} scholarshipData={scholarship}/></div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScholarshipListingSection;
