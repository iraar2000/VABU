import React, { useState } from "react";
import "./QuestionTag.css"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function QuestionTag({question}) {
    
    const [viewAnswer, setViewAnswer] = useState(false);
    
    console.log(question);

    return (
        <div className="question-tag">
            <div className="question-title-container">
                <p className="question-title">{question.question}</p>
                <button className="btn-answer-viewer" onClick={() => setViewAnswer((prev)=> !prev)}>{viewAnswer?<FaAngleUp/>:<FaAngleDown/>}</button>
            </div>
            <div className={`question-answer-container ${viewAnswer? "view-answer" : ""}`}>
                <p className="question-answer">{question.answer}</p>
            </div>
        </div>
    )
}

export default QuestionTag;