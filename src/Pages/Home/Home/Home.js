import React from 'react';
import Rooms from '../Rooms/Rooms';
import hotel1 from '../../../images/hotel-img/hotel-1.jpg';
import hotel2 from '../../../images/hotel-img/hotel-2.jpg';
import { Link } from 'react-router-dom';
import './Home.css';
import hotelvideo from '../../../images/videopic.jpg'
import VideoImg from '../VideoImg/VideoImg';

const Home = () => {
    
    return (
        <div>
            <Rooms></Rooms>

            <section>
                <div className="hotel-info container">
                    <div className="row">
                        <div className="title-info col-md-6 bg-dark text-white justify d-flex justify-content-sm-center align-items-center flex-column">
                            <h1>Michelin Restaurants</h1>
                            <br />
                            <h1>|</h1>
                            <p>
                                A wonderful serenity has taken possession of my entire soul, like these
                                 sweet mornings of spring which I enjoy with my whole heart. I am alone, and 
                                 feel the charm of existence in this spot, which was created for the bliss of 
                                 souls like mine. I am so happy, my dear friend, so absorbed in the exquisite 
                                 sense of mere tranquil existence, that I neglect my talents.
                            </p>
                            <div className="more-details">
                                <Link className='text-white ' to='/about'>Check More Details</Link>
                            </div>
                        </div>
                        <div className="title-info col-md-6">
                            <img className='w-100' src={hotel1} alt="" />
                        </div>
                        
                    </div>
                </div>
            </section>

            <section>
                <div className="hotel-info container">
                    <div className="row">
                        
                        <div className="title-info col-md-6">
                            <img className='w-100' src={hotel2} alt="" />
                            
                        </div>

                        <div className="title-info col-md-6 bg-dark text-white justify d-flex justify-content-sm-center align-items-center flex-column">
                            <h1>Michelin Restaurants</h1>
                            <br />
                            <h1>|</h1>
                            <p>
                                A wonderful serenity has taken possession of my entire soul, like these
                                 sweet mornings of spring which I enjoy with my whole heart. I am alone, and 
                                 feel the charm of existence in this spot, which was created for the bliss of 
                                 souls like mine. I am so happy, my dear friend, so absorbed in the exquisite 
                                 sense of mere tranquil existence, that I neglect my talents.

                            </p>
                            <div className="more-details">
                                <Link className='text-white ' to='/about'>Check More Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* video pic  */}
            <section className='container-fluid mt-3'>
                <div className="video-pic">
                    <VideoImg></VideoImg>
                </div>
            </section>
        </div>
    );
};

export default Home;