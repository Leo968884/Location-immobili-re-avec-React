import { useState, useEffect } from 'react';

const usePropertyId = (id) => {
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchPropertyId = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/properties/${id}`);
                if (!response.ok) {
                    setError('Network response was not ok');
                }
                const data = await response.json();
                setProperty(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPropertyId();
    }, []);

    return { property, loading, error };
};

export default usePropertyId;
