import { Header } from '../../components/Header/Header';

import './style.css';
import { Footer } from '../../components/Footer/footer';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />

      <section class="dark">
        <div class="container">
          <h2>Heading</h2>
          <p>Quas odio quidem, enim nihil unde quia temporibus vitae in ab.</p>
          <div class="cards-row">
            <div class="card">
              <img class="card__image" src="img/image1.svg" />
              <div class="card__title">Card 1</div>
              <div class="card__body">Sunt natus</div>
            </div>

            <div class="card">
              <img class="card__image" src="img/image1.svg" />
              <div class="card__title">Card 2</div>
              <div class="card__body">Laboriosam</div>
            </div>

            <div class="card">
              <img class="card__image" src="img/image1.svg" />
              <div class="card__title">Card 3</div>
              <div class="card__body">Eveniet officiis</div>
            </div>
          </div>
        </div>
      </section>

      <section class="light">
        <div class="container">
          <h2>Heading</h2>
          <div class="columns-2">
            <div class="column">
              <img src="img/image1.svg" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                accusantium, dolor quisquam doloremque quod nobis temporibus
                ducimus sapiente consectetur distinctio assumenda, nisi suscipit
                saepe. Vero.
              </p>
            </div>
            <form>
              <div class="form-fields">
                <label htmlFor="field1" class="field-label">
                  Field 1:
                </label>
                <input id="field1" class="field-input" type="text" />

                <label htmlFor="field2" class="field-label">
                  Field 2:
                </label>
                <input id="field2" class="field-input" type="text" />

                <label htmlFor="select" class="field-label">
                  Select:
                </label>
                <select id="select" class="field-input">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>

                <label htmlFor="check1" class="field-label">
                  Checkbox 1:
                </label>
                <input id="check1" class="field-input" type="checkbox" />
              </div>
              <button class="wide">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
