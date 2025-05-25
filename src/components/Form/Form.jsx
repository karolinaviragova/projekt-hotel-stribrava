import { useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from "react-router";


export const Form = ({ roomPrice }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [meals, setMeals] = useState('');
  const [pet, setPet] = useState(false);
  const [child, setChild] = useState(false);
  const [accessible, setAccessible] = useState(false);
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  const date1 = dayjs(endDate);
  const date2 = dayjs(startDate);
  const numberOfDays = date1.diff(date2, 'day');

  const navigate = useNavigate();

  let finalPrice = roomPrice * numberOfDays * guests
  if (pet) {
    finalPrice += roomPrice * 0.25 * numberOfDays
  }
  if (child) {
    finalPrice += roomPrice * 0.5 * numberOfDays
  }
  if (meals === 'breakfast') {
    finalPrice += 150 * numberOfDays * guests
  }
  if (meals === 'half') {
    finalPrice += 300 * numberOfDays * guests
  }
  if (meals === 'full') {
    finalPrice += 500 * numberOfDays * guests
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start: startDate,
        end: endDate,
        guests: guests,
        meals: meals,
        pet: pet,
        child: child,
        accessible: accessible,
        email: email,
        tel: tel,
        price: finalPrice,
        status: 'new',
      }),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Od:
        </label>
        <input
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
          id="field1"
          className="field-input"
          type="date"
        />

        <label htmlFor="field2" className="field-label">
          Do:
        </label>
        <input
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
          id="field2"
          className="field-input"
          type="date"
        />

        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          id="field3"
          className="field-input"
          type="text"
        />

        <label htmlFor="select" className="field-label">
          Stravování:
        </label>
        <select
          onChange={(e) => setMeals(e.target.value)}
          value={meals}
          id="select"
          className="field-input"
        >
          <option>Žádné</option>
          <option value='breakfast'>Snídaně</option>
          <option value='half'>Polopenze</option>
          <option value='full'>Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          value={pet}
          onChange={(e) => setPet(e.target.value)}
          id="check1"
          className="field-input"
          type="checkbox"
        />

        <label htmlFor="check2" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          value={child}
          onChange={(e) => setChild(e.target.value)}
          id="check2"
          className="field-input"
          type="checkbox"
        />

        <label htmlFor="check3" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          value={accessible}
          onChange={(e) => setAccessible(e.target.value)}
          id="check3"
          className="field-input"
          type="checkbox"
        />
      </div>

      <label htmlFor="field4" className="field-label">
        Email:
      </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="field4"
        className="field-input"
        type="email"
      />

      <label htmlFor="field5" className="field-label">
        Telefon:
      </label>
      <input
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        id="field5"
        className="field-input"
        type="tel"
      />

      <p>{`Celková cena objednávky ${finalPrice || roomPrice} Kč`}</p>

      <button onClick={()=> navigate('/confirmation')} className="wide">Odeslat objednávku!</button>
    </form>
  );
};

