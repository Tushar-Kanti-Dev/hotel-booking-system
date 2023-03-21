import React from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';
import './VideoImg.css'

const VideoImg = () => {
    
    return (
        <div className='container-fluid text-center text-white fw-bold'>
            <div className="bg items-container">
                <div>
                    <h1>Choose Your Best</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque?</p>
                    <div className="video-button">
                        <button><Video></Video></button>  
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoImg;