import React from 'react';
import './Tags.css';

const Tags = ({ tags }) => {
    return (
        <div className='tags-container'>
            {tags.map((tag, index) => (
                <div key={index} className='tag'>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default Tags;
