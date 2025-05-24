import { useEffect, useState } from 'react';

export const AdminPage = () => {
  const [reservations, setReservations] = useState(null);

  const fetchReservations = async () => {
    const response = await fetch(`http://localhost:4000/api/reservations`);
    const responseData = await response.json();
    setReservations(responseData.data);
  };
  useEffect(() => {
    fetchReservations();
  }, []);

  const handleConfirm = async (id) => {
    await fetch(`http://localhost:4000/api/reservations/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/status',
          value: 'confirmed',
        },
      ]),
    });
    fetchReservations();
  };
  return (
    <>
      <h1>Ahoj Andulko, tady jsou tve rezervace</h1>
      {reservations?.map((reservation) => (
        <div>
          <p>Počet osob {reservation.guests}</p>
          <p>Den prijezdu {reservation.start}</p>
          <p>Den odjezdu {reservation.end}</p>
          <p>Jidlo {reservation.meals}</p>
          <p>Mazlíček {reservation.pet}</p>
          <p>Dítka {reservation.child}</p>
          <p>Bezbarierovy pristup {reservation.accessible}</p>
          <p>Email: {reservation.email}</p>
          <p>Telefonni číslo: {reservation.tel}</p>
          <p>Status objednavky {reservation.status}</p>
          <button onClick={() => handleConfirm(reservation.id)}>Confirm</button>
          <button>Reject</button>
          <br></br>
        </div>
      ))}
    </>
  );
};
