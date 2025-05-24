import mapaImg from './img/mapa.png'

export const Footer = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Kontakt</h2>
          <p>Hotel Stribrava </p>
          <p>Ke Kamenné lávce 12 </p>
          <p>317 24 </p>
          <p>Libnice nad Stribravou</p>
          <a href='mailto:recepce@hotelstribrava.cz'>recepce@hotelstribrava.cz</a>
        </div>
        <img src={mapaImg} alt="mapa" />
      </div>
    </section>
  );
};
