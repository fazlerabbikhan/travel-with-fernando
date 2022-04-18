import React from 'react';
import { useNavigate } from 'react-router-dom';

const Place = ({ place }) => {

    const { id, name, price, description, img } = place;
    const navigate = useNavigate();

    const navigateToPlaceDetail = id => {
        navigate(`/place/${id}`)
    }

    return (
        <div className='g-2 col-12 col-md-6 col-lg-4'>
            <div class='card mx-3' style={{ width: '20rem' }}>
                <img src={img} class='card-img-top' alt='...' />
                <div class='card-body'>
                    <h4 class='card-title'>City: {name}</h4>
                    <h5 class='card-text'>Price: {price}</h5>
                    <h6 class='card-text'>Description: {description}</h6>
                    <div className='d-flex justify-content-center'>
                        <button onClick={() => navigateToPlaceDetail(id)} className='btn btn-primary'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;