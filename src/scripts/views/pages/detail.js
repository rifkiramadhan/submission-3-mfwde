import UrlParser from '../../routes/url-parser';
import Loader from '../templates/loader';
import NearbySource from '../../data/resto-source';
import nearbyDetail from '../templates/nearby-detail';
import LikeButtonInitiator from '../../utils/initiator/like-button-initiator';
import PostReview from '../../utils/post-review';
import { swallErrorInit } from '../../utils/initiator/swal-initiator';
import { sendDataToWebsocket } from '../../utils/initiator/websocket-initiator';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>
        <div class="like-button" id="likeButtonContainer"></div>
        <div id="main-container">
          <h2 tabindex="0" class="title-container">Halaman Detail</h2>
          <section id="detail-resto"></section>
        </div>
      </div>
    `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const loader = document.querySelector('#loading');
    const mainRestoContainer = document.querySelector('#main-container');
    const detailRestoContainer = document.querySelector('#detail-resto');

    // change main display to Loader
    mainRestoContainer.style.display = 'none';
    loader.innerHTML = Loader();

    try {
      const data = await NearbySource.getRestaurantDetail(url.id);

      // use the detail data
      console.info(data);
      detailRestoContainer.innerHTML += nearbyDetail(data.restaurant);

      // init like button
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        data,
      });

      // change Loader display to main
      mainRestoContainer.style.display = 'block';
      loader.style.display = 'none';

      // review form
      const nameInput = document.querySelector('#name-input');
      const reviewInput = document.querySelector('#review-input');
      const btnSubmitReview = document.querySelector('#submit-review');

      btnSubmitReview.addEventListener('click', async (e) => {
        e.preventDefault();

        // POST review
        await PostReview(url, nameInput.value, reviewInput.value);

        // Send message to websocket server
        sendDataToWebsocket({
          name: nameInput.value,
          review: reviewInput.value,
        });

        // clear form input
        nameInput.value = '';
        reviewInput.value = '';
      });
    } catch (err) {
      console.error(err);

      mainRestoContainer.style.display = 'block';
      loader.style.display = 'none';
      detailRestoContainer.innerHTML = `Error: ${err.message}`;
      swallErrorInit(err.message);
    }
  },
};

export default Detail;
