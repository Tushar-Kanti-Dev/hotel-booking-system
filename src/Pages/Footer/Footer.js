import React from 'react';
import './Footer.css';
import googleplay from '../../images/playstore.png'

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className="row ">
                <div className="title-container bg-dark text-white col-md-6 col-sm-12 flex-column d-flex justify-content-center align-items-center">
                        <h2>Dolor sit amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos?</p>
                </div>
                <div className="social-container bg-dark text-white col-md-6 col-sm-12 flex-column d-flex justify-content-center align-items-center">
                    <img className='w-100' src={googleplay} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Footer;