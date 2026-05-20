import React from "react";
import "./ReviewCard.css"
import { RiDoubleQuotesL } from "react-icons/ri";

function ReviewCard({review}) {
    console.log(review);
    return (
        <div className="review-card-container">
            <div className="separator-container">
                <div className="review-content">
                    <div className="review-icon">
                        <div className="icon"><RiDoubleQuotesL/></div>
                    </div>
                    <div className="review-comment-container">
                        <p className="review-comment">
                            {review.comment}
                        </p>
                    </div>
                </div>
                <div className="review-profile-details">
                    <div className="profile-image">
                        <img src={`${review.profileImage}`} alt={`${review.userName}-profile`}/>
                    </div>
                    <div className="profile-info">
                        <p className="userName">{review.userName}</p>
                        <p className="userTitle">{review.userTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;
