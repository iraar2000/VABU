import { useEffect, useState } from "react";
import ImageSlider from "@objcomponent/ImageSlider";
import "./HeroSection.css";

const images = [
  "public/hero poster.jpeg",
  "public/hero poster.jpeg",
  "public/hero poster.jpeg",
  "public/hero poster.jpeg"
];

function HeroSection() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    //   the hero section 
    return (
        <section id="hero-section">
            <div className="hero-container">
                <ImageSlider imageUrl={images}/>
            </div>
        </section>
    );
}

export default HeroSection;