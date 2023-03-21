import React from 'react';
import { Link } from 'react-router-dom';
import './VideoImg.css'

const VideoImg = () => {
    return (
        <div className='container-fluid text-center text-white fw-bold'>
            <div className="bg items-container">
                <div>
                    <h1>Choose Your Best</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque?</p>
                    <div className="video-button">
                        
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oyFFq0yMZJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoImg;