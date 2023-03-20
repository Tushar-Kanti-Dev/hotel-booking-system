import React, { useEffect, useState } from 'react';
import useRooms from '../../../hooks/useRooms';

const Rooms = () => {
    const [rooms, setRooms] = useRooms();
    return (
        <div>
            <h1>This is rooms{rooms.length}</h1>
            <div className="rooms-container">
                {
                    rooms.map
                }
            </div>
        </div>
    );
};

export default Rooms;