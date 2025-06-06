import hotelImg from "./hotel.jpg"

export const Header = () => {
  return (
    <div className="banner">
      <div className="banner__stripe">
        <div className="container">
          <h1>Hotel Stříbrava</h1>
          <p className="lead">
            Rodinný hotel v malebné krajině Českého středohoří.
          </p>
        </div>
      </div>
      <img src={hotelImg} alt="pohled na hotel stribrava" />
    </div>
  );
};
