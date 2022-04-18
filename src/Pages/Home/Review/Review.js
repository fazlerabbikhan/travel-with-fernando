import React from 'react';

const Review = ({ review }) => {

    const { name, comment, rating, img } = review;

    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div class='card mx-5' style={{ width: '16rem' }}>
                <img src={img} class='card-img-top' alt='...' />
                <div class='card-body'>
                    <h6 class='card-text'>Review: {comment}</h6>
                    <h6 class='card-text'>Rating: {rating}</h6>
                </div>
            </div>
        </div>
    );
};

export default Review;