import React from 'react';
import './Banner.css';

const Banner = ({ title, picture }) => {
    return (
        <div className="banner">
            {title && <h1>{title}</h1>}
            <img src={picture} alt={title} />
        </div>
    );
};

export default Banner;
