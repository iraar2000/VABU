import React from "react"
import "./WhyChooseUsCard.css"
import * as faIcons from "react-icons/fa6";
import * as mdIcons from "react-icons/md";
import * as hiIcons from "react-icons/hi2";
import * as ioIcons from "react-icons/io";
import * as tbIcons from "react-icons/tb";

const icons = {
    ...faIcons,
    ...mdIcons,
    ...hiIcons,
    ...ioIcons,
    ...tbIcons
};

function WhyChooseUsCard({wcuData}) {
    const Icon = icons[wcuData.icon]
    return (
        <div className="whychooseus-card">
            <div className="content-wrapper">
                <div className="icon-container">{Icon && <Icon/>}</div>
                <div className="wcu-content">
                    <div className="title">{wcuData.title}</div>
                    <div className="description">{wcuData.content}</div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUsCard;
