import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const Room = ({room}) => {
    const {name, img} = room;
    return (
        <div className='gx-5 card col-sm-12 card col-md-6 card col-lg-4'>
            <div className="card w-100" style={{width: '20rem'}}>
                <img className="card-img-top w-100" src={img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        </div>
    );
};

export default Room;