export const RoomList = ({ roomData, onSelect }) => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte su který z našich pokojů je pro Vás ten pravý.</p>
        <div className="cards-row">
          {roomData?.map((room) => (
            <div className="card" onClick={() => onSelect(room.id)}>
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
