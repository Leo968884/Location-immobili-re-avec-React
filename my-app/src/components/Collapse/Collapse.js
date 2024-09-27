import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleOpen}>
                <h2>{title}</h2>
                <i className={`fa-solid fa-chevron-up ${isOpen ? 'rotate' : ''}`}></i>
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Collapse;
