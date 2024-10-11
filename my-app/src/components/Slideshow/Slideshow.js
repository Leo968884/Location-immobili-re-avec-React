import React, { useState } from 'react';
import './Slideshow.css';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="slideshow-container">
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            {images.length > 1 && (
                <>
                    <div className="arrow left fa-solid fa-chevron-left" onClick={goToPrevious}></div>
                    <div className="arrow right fa-solid fa-chevron-right" onClick={goToNext}></div>
                    <div className="slide-counter">
                        {currentIndex + 1}/{images.length}
                    </div>
                </>
            )}
        </div>
    );
};

export default Slideshow;
