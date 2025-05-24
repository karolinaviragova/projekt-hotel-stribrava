export const RoomList = ({ roomData }) => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Heading</h2>
        <p>Quas odio quidem, enim nihil unde quia temporibus vitae in ab.</p>
        <div className="cards-row">
          {roomData?.map((room) => (
            <div className="card">
              <img className="card__image" src={room.img}/>
              <div className="card__title">{room.name}</div>
              <div className="card__body">{room.price} {room.units}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
