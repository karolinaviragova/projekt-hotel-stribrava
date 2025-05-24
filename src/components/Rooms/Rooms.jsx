import { RoomList } from '../RoomList/RoomList';
import { RoomDetail } from '../RoomDetail/RoomDetail';
import { Form } from '../Form/Form';

export const Rooms = () => {
  return (
    <div>
      <RoomList />
      <section class="light">
        <div class="container">
          <h2>Heading</h2>
          <div class="columns-2">
            <RoomDetail />
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};
