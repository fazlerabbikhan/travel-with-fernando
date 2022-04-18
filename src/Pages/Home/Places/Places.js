import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';

const Places = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])

    return (
        <div className='container'>
            <h2 className='text-primary text-center fw-bold'>Places to Visit</h2>
            <div className='row'>
                {
                    places.map(place =>
                        <Place
                            key={place.id}
                            place={place}
                        ></Place>)
                }
            </div>
        </div>
    );
};

export default Places;