import { useState } from "react";
import {  FaArrowLeft, FaArrowRight, FaCircle, FaRegDotCircle} from "react-icons/fa";
import "./ImageSlider.css"

function ImageSlider({imageUrl}) {
    const [imageIndex, setIMageIndex] = useState(0)

    function showPrevImage() {
        setIMageIndex(index => {
            if (index === 0) return imageUrl.length - 1;
            return index - 1;
        })
    }

    function showNextImage() {
        setIMageIndex(index => {
            if(index === imageUrl.length - 1) return 0;
            console.log(index);
            return index + 1;
        })
    }

    return (
        <div className="imageSlider-container h-full w-full relative">
            <div className="imageSlider-imageList h-full w-full flex overflow-hidden">
                {imageUrl.map((imageUrl, index) => (
                    <img  
                        className="imageSlider-image w-full h-full object-cover block" 
                        key={`${imageUrl}-${index}`} 
                        src={imageUrl}
                        style={{translate:`${-100 * imageIndex}%`}}
                    />
                ))}
            </div>
            <button className="imageSlider-button" style={{left : 0}} onClick={showPrevImage} aria-label="view pervious image"><FaArrowLeft color="black" size={12}/></button>
            <button className="imageSlider-button" style={{right : 0}} onClick={showNextImage} aria-label="view next image"><FaArrowRight color="black" size={12}/></button>
            <div className="flex flex-row gap-0.5 absolute bottom-6 left-1/2 -translate-x-1/2">
                {imageUrl.map((_, index) => (
                    <button key={`slide-btn-circle-${index}`} className="slider-btn" onClick={() => setIMageIndex(index)}>{index === imageIndex? <FaRegDotCircle/> : <FaCircle/>}</button>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider;