import FavNearbyIdb from '../../data/resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../../views/templates/like-button';
import { swallErrorInit, swalSuccessInit } from './swal-initiator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      // Get resto in indexed db
      const restaurant = await FavNearbyIdb.getResto(id);

      if (restaurant) {
        this._renderLikedButtonTemplate();
      } else {
        this._renderLikeButtonTemplate();
      }
    } catch (err) {
      console.error(err);
      swallErrorInit(err.message);
      throw new Error(err);
    }
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // onClick fav the selected resto
      await FavNearbyIdb.putResto(this._restaurant);
      swalSuccessInit('Berhasil disimpan');
      this._renderButton();
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // onClick unfav the selected resto
      await FavNearbyIdb.deleteResto(this._restaurant.id);
      swalSuccessInit('Berhasil dihapus');
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
