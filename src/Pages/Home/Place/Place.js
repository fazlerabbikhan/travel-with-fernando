import React from 'react';

const Place = ({ place }) => {

    const { name, price, description, img } = place;

    return (
        <div className='g-2 col-12 col-md-6 col-lg-4'>
            <div class='card mx-3' style={{ width: '20rem' }}>
                <img src={img} class='card-img-top' alt='...' />
                <div class='card-body'>
                    <h4 class='card-title'>City: {name}</h4>
                    <h5 class='card-text'>Price: {price}</h5>
                    <h6 class='card-text'>Description: {description}</h6>
                    <div className='d-flex justify-content-center'>
                        <a href='#' class='btn btn-primary'>Checkout</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;