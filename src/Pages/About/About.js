import React from 'react';

const About = () => {
    return (
        <div className='container d-flex mt-5'>
            <img className='rounded-3 w-25' src='https://avatars.githubusercontent.com/u/30477589?v=4' alt='' />
            <h5 className='ps-5'>Hi, this is <span className='text-danger'>Fernando Alonso</span> from Madrid, Spain. <br />
                I can be your best travel guide across Europe. You can have my assistance if you want to visit some of the best cities in Europe. Currently I'm offering you packages for Barcelona, Paris and Rome.</h5>
        </div>
    );
};

export default About;