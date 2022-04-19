import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PlaceDetail = () => {
    const { placeId } = useParams();
    return (
        <div>
            <h2>Welcome: {placeId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default PlaceDetail;