import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id , name , img , des} = service;
    const navigate = useNavigate();
    const navigateToServicedetails = (id) =>{
        navigate(`/service/${id}`);
    }


    return (
        <div className='single-service'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p><small>{des}</small></p>
            <button onClick={() => navigateToServicedetails(id)} className='btn btn-success'>Explore</button>
        </div>
    );
};

export default Service;