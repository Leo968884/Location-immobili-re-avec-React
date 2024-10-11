import React from 'react';
import './Tags.css';

const Tags = ({ tags }) => {
    return (
        <div className='tags-container'>
            {tags.map((tag) => (
                <div className='tag'>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default Tags;
