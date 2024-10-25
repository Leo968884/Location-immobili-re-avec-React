import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tags from '../../components/Tags/Tags';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';
import usePropertyId from '../../hooks/usePropertyId';
import './Accommodation.css';

const Accommodation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { property, loading, error } = usePropertyId(id);

    if (loading) return <p>Loading...</p>;
    if (error) return navigate('/error');

    const images = property.pictures;
    const [lastname, firstname] = property.host.name.split(' ')

    return (
        <main id='accommodationpage'>
            <Slideshow images={images} />
            <div className='accommodation-container'>
                <div className='accommodation-details'>
                    <div className='title-container'>
                        <h3>{property.title}</h3>
                        <h2>{property.location}</h2>
                    </div>
                    <Tags tags={property.tags} />
                </div>
                <div className='profil-details'>
                    <div className='host-container'>
                        <div className='host-name'>
                            <p>{firstname}</p>
                            <p>{lastname}</p>
                        </div>
                        <img src={property.host.picture} alt={`Photo de ${property.host.name}`} />
                    </div>

                    <Rating rating={property.rating} />
                </div>
            </div>
            <div className='collapse-container'>
                <Collapse title='Description' content={property.description} />
                <Collapse title='Équipements' content={<ul className="equipments-list">{property.equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}</ul>} />
            </div>
        </main>
    );
};

export default Accommodation;