import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name , img , des} = service;
    return (
        <div className='single-service'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p><small>{des}</small></p>
            <button className='btn btn-success'>Explore</button>
        </div>
    );
};

export default Service;