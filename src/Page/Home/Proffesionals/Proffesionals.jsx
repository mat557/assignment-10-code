import React from 'react';
import imge from '../../../img/my-self.jpg';
import './Proffesional.css';


const Proffesionals = () => {
    return (
        <div className='des-holder mt-5'>
            <div className='tex'>
                <h4 className=''>Hi, i am</h4>
                <h2 className='text-success'>Andress Vidoja</h2>
                <p>I  have 5 years of experience as a professional wild life photographer.
                In this long run i have worked with many organization as well as customer's 
                personal projects.To complete those task i have visited many forest in Asia,africa,America 
                and so on. Checkout "My Services" section to find out your need and contact me for further
                action! 
                </p>
            </div>
            <div className='tex'>
                <img src={imge} alt="" />
            </div>
        </div>
    );
};

export default Proffesionals;