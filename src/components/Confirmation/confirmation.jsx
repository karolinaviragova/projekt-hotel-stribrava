import { Link } from 'react-router-dom';

export const Confirmation = () => {
  return (
    <div>
      <h1>Objednavka odeslana!</h1>
      <br />
      <p>Andulka se Vam ozve.</p>
      <button><Link to="/">Zpet na hlavni stranku</Link></button>
    </div>
  )
}
