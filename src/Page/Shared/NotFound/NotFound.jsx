import React from 'react';
import sleeping from '../../../img/sleeping.jpg';

const NotFound = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center text-success'>404</h1>
            <h3 className='text-center text-success'>The page is not found</h3>
            <img className='w-75 mx-auto d-block' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;