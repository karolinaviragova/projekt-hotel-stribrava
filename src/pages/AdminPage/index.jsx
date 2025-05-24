import { useEffect, useState } from "react"

export const AdminPage = () => {
  const [reservations, setReservations] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch(`http://localhost:4000/api/reservations`);
      const responseData = await response.json();
      setRooms(responseData.data);
      setRoomSelected(responseData.data[0].id)
    };
    fetchRooms();
  }, []);

  return(
    <h2>Ahoj</h2>
  )
}
