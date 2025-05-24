import { RoomList } from '../RoomList/RoomList';
import { RoomDetail } from '../RoomDetail/RoomDetail';
import { Form } from '../Form/Form';
import { useEffect, useState } from 'react';

export const Rooms = () => {
  const [rooms, setRooms] = useState(null);
  const [roomSelected, setRoomSelected] = useState(null);

  const room = rooms?.find((room) => room.id === roomSelected);

  const handleClick = (room) => {
    setRoomSelected(room);
    console.log(room);
  };

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch(`http://localhost:4000/api/room`);
      const responseData = await response.json();
      setRooms(responseData.data);
      setRoomSelected(responseData.data[0].id)
    };
    fetchRooms();
  }, []);

  return (
    <div>
      <RoomList roomData={rooms} onSelect={handleClick} />
      <section className="light">
        <div className="container">
          <div className="columns-2">
            {room && <RoomDetail selectedRoom={room} />}
            {room && <Form roomPrice={room.price}/>}
          </div>
        </div>
      </section>
    </div>
  );
};
