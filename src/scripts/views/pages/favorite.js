import FavNearbyIdb from '../../data/resto-idb';
import nearbyCard from '../templates/nearby-card';

const Favorite = {
  async render() {
    return `
      <div class="container">
        <h2 class="title-container">Restaurant Favorit</h2>
        <section id="fav-resto"></section>
      </div>
    `;
  },

  async afterRender() {
    // get fav resto
    const data = await FavNearbyIdb.getAllResto();

    const favRestoContainer = document.querySelector('#fav-resto');

    // if data empty
    if (data.length === 0) {
      favRestoContainer.innerHTML = `
        Restaurant favorit anda masih kosong, silahkan kunjungi dan simpan restaurant yang Anda sukai.
      `;
    }

    // display all fav resto
    data.forEach((resto) => {
      favRestoContainer.innerHTML += nearbyCard(resto);
    });
  },
};

export default Favorite;
