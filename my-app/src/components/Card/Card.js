import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ accommodation }) => {
    return (
        <Link to={`/accommodation/${accommodation.id}`} className="card">
            <img src={accommodation.cover} alt={accommodation.title} />
            <h3>{accommodation.title}</h3>
        </Link>
    );
};

export default Card;
