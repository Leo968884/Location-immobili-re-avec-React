import React from 'react';
import './Rating.css';

const Rating = ({ rating }) => {
    const generateStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<i key={i} className="fa-xs fa-solid fa-star" aria-hidden="true"></i>);
            } else {
                stars.push(<i key={i} className="fa-xs fa-solid fa-star neutral-star" aria-hidden="true"></i>);
            }
        }
        return stars;
    };

    return <div className='rating-container'>{generateStars()}</div>;
};

export default Rating;
