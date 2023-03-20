
import useRooms from '../../../hooks/useRooms';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useRooms();
    return (
        <div className="rooms-container">
            <h1>This is rooms{rooms.length}</h1>
            <div className='row'>
                {
                    rooms.map(room => <Room
                        key={room.id}
                        room = {room}
                    ></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;