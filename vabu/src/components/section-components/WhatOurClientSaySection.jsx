import React, { useState } from "react";
import "./WhatOurClientSaySection.css"
import ReviewCard from "@objcomponent/reviewCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function WhatOurClientSaySection() {

    // this sets the first value to retrieve 
    const ITEMS_PER_PAGE = 4;
    const [startIndex, setStartIndex] = useState(0);

    const reviewData = [
        {profileImage: "/src/assets/prof1.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof2.avif",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof3.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof4.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof5.jfif",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof6.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof7.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof8.jfif",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof9.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof10.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof11.jfif",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof12.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof13.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof14.jfif",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof15.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof16.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof17.jfif",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof18.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof19.jpg",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
        {profileImage: "/src/assets/prof20.jfif",userName: "John. A", userTitle: "Software Engineer", comment: "The scholarship support was incredibly helpful. They guided me through every step of the application process and made everything much easier."},
    ]

     function rightScrollHandler() {
        setStartIndex((prev) => {
            const next = prev + ITEMS_PER_PAGE;

            if (next >= reviewData.length) {
                return 0;
            }

            return next;
        });
    }

    function leftScrollHandler() {
        setStartIndex((prev) => {
            const next = prev - ITEMS_PER_PAGE;

            if (next < 0) {
                return Math.max(reviewData.length - ITEMS_PER_PAGE, 0);
            }

            return next;
        });
    }

    return (
        <section className="what-our-client-say-section">
            <div className="wrapper-main-size wocss-section-container">
                <div className="wocss-section-heading">
                    <p className="heading">What our clients say</p>
                    <p className="subheading">Hear directly from our clients about their experiences with our services, support, and commitment to delivering reliable global solutions.</p>
                </div>
                <div className="wocss-section-content">
                    {
                        reviewData.slice(startIndex, startIndex + ITEMS_PER_PAGE).map((review, index) => <div key={`${startIndex}-${review.userName}-${index}`} className="review-animation"><ReviewCard  review={review}/></div>)
                    }
                    <button className="left-scroll" onClick={leftScrollHandler}><FaAngleLeft/></button>
                    <button className="right-scroll" onClick={rightScrollHandler}><FaAngleRight/></button>
                </div>
            </div>
        </section>
    )
}

export default WhatOurClientSaySection;
