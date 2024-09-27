import React from 'react';
import useProperties from '../../hooks/useProperties';
import Banner from '../../components/Banner/Banner';
import BannerImg from '../../assets/Falaise.png';
import Card from '../../components/Card/Card';
import './Home.css';


const Home = () => {
    const { properties, loading, error } = useProperties();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <main id='homepage'>
            <Banner title="Chez vous, partout et ailleurs" picture={BannerImg} />
            <div className="accommodation-list">
                {properties.map((accommodation) => (
                    <Card key={accommodation.id} accommodation={accommodation} />
                ))}
            </div>
        </main>
    );
};

export default Home;
