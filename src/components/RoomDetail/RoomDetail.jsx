export const RoomDetail = ({selectedRoom}) => {
  return (
    <div className="column">
      <h2>{selectedRoom.name} {selectedRoom.price} Kč na osobu za noc</h2>

      <img src={selectedRoom.img} />
      <p>{selectedRoom.description}</p>
    </div>
  );
};
