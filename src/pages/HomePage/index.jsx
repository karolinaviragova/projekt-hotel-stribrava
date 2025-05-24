import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/footer';
import { Rooms } from '../../components/Rooms/Rooms';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Rooms />
      <Footer />
    </div>
  );
};
