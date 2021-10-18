import Loader from '../templates/loader';
import NearbySource from '../../data/resto-source';
import nearbyCard from '../templates/nearby-card';
import { swallErrorInit } from '../../utils/initiator/swal-initiator';

const Home = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>
        <div id="main-container">
          <h1 tabindex="0" class="main-card-title">Cari Restaurant</h1>
          <section id="explore-restaurant"></section>
        </div>
      </div>
    `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const mainRestoContainer = document.querySelector('#main-container');
    const exploreRestoContainer = document.querySelector('#explore-restaurant');
    const loader = document.querySelector('#loading');

    // change main display to Loader
    mainRestoContainer.style.display = 'none';
    loader.innerHTML = Loader();

    try {
      const data = await NearbySource.getRestaurantList(); // fetch restaurant list

      // loop restaurants data
      data.restaurants.forEach((restaurant) => {
        exploreRestoContainer.innerHTML += nearbyCard(restaurant);
      });

      // change Loader display to main
      mainRestoContainer.style.display = 'block';
      loader.style.display = 'none';
    } catch (err) {
      console.error(err);

      mainRestoContainer.style.display = 'block';
      loader.style.display = 'none';
      exploreRestoContainer.innerHTML = `Error: ${err.message}`;
      swallErrorInit(err.message);
    }
  },
};

export default Home;
