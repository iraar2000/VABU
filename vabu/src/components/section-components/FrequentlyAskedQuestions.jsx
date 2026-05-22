import React from "react";
import "./FrequentlyAskedQuestions.css";
import QuestionTag from "@objcomponent/QuestionTag";

function FrequentlyAskedQuestions() {
    const faqData = [
        {
            question: "What services do you provide?",
            answer: "We provide scholarship assistance, visa application support, product sourcing, shipping, and international business solutions."
        },
        {
            question: "Do you help students apply for scholarships?",
            answer: "Yes, we guide students through scholarship searches, application preparation, and submission processes."
        },
        {
            question: "Can you assist with visa applications?",
            answer: "Yes, we help clients prepare and organize the required documents for different visa applications."
        },
        {
            question: "Do you offer international shipping services?",
            answer: "Yes, we provide reliable shipping and logistics solutions for goods across different countries."
        },
        {
            question: "How long does the visa process take?",
            answer: "Visa processing times depend on the country and application type, but we help ensure your documents are submitted correctly and on time."
        },
        {
            question: "Can you source products from overseas suppliers?",
            answer: "Yes, we help businesses and individuals find trusted suppliers and source quality products internationally."
        },
        {
            question: "Do you provide consultation services?",
            answer: "Yes, we offer professional consultation to help clients choose the best solutions for their goals."
        },
        {
            question: "How can I contact your support team?",
            answer: "You can contact our support team through phone, email, or the contact form on our website."
        }
    ];

    return (
        // the faq section
        <section className="faq-section">
            <div className="faq-section-container wrapper-main-size">
                <div className="faq-section-heading">
                    <p className="heading">Frequently asked questions</p>
                    <p className="subheading">Hear directly from our clients about their experiences with our services, support, and commitment to delivering reliable global solutions.</p>
                </div>
                <div className="faq-section-content">
                    {faqData.map(question => <QuestionTag question={question}/>)}
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions;