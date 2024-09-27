import React from 'react';
import './Accommodation.css';
import Slideshow from '../../components/Slideshow/Slideshow';
import useProperties from '../../hooks/useProperties';

const Accommodation = () => {
    const { properties, loading, error } = useProperties();
    // gérer les URL dynamique en React (useparam)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const property = properties[0];
    const images = property.pictures;

    return (
        <main>
            <Slideshow images={images} />
        </main>
    );
};

export default Accommodation;