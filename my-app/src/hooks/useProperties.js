import { useState, useEffect } from 'react';

const useProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/properties');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProperties(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    return { properties, loading, error };
};

export default useProperties;
