import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const today = date.getFullYear();
    return (
        <footer className='footer-class'>
            <p className='pt-5'><small>copyright @{today}</small></p>
        </footer>
    );
};

export default Footer;