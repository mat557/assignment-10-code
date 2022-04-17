import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div className='mt-5'>
            <h1 className='text-center text-success pt-4 mb-4'>welcome to service details:{serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;