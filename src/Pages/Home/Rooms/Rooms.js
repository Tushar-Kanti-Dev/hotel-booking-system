
import { Link } from 'react-router-dom';
import useRooms from '../../../hooks/useRooms';
import Banner from '../Banner/Banner';
import Room from '../Room/Room';
import './Rooms.css'

const Rooms = () => {
    const [rooms, setRooms] = useRooms();
    return (
        <div className="rooms-container">
            <Banner></Banner>
            <h1 className='home-title text-center'>Our Rooms Design</h1>
            <div className='row'>
                {
                    rooms.map(room => <Room
                        key={room.id}
                        room = {room}
                    ></Room>)
                }
            </div>
            <div className="view-all-button">
            <button className='rounded'><Link className='home-view-button text-decoration-none' to='rooms'>View All Rooms</Link></button>
            </div>

        </div>
    );
};

export default Rooms;