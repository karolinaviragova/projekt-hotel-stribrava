import { RoomList } from '../RoomList/RoomList';
import { RoomDetail } from '../RoomDetail/RoomDetail';
import { Form } from '../Form/Form';
import { useEffect, useState } from 'react';

export const Rooms = () => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch(
        `http://localhost:4000/api/room`,
      );
      const responseData = await response.json();
      setRooms(responseData.data);
    };
    fetchRooms();
  }, []);

  return (
    <div>
      <RoomList />
      <section className="light">
        <div className="container">
          <div className="columns-2">
            <RoomDetail />
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};
