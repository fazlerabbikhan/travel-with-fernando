import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div id='reviews' className='container'>
            <h2 className='text-primary text-center fw-bold mt-5'>Reviews</h2>
            <div className='row'>
                {
                    reviews.map(review =>
                        <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;