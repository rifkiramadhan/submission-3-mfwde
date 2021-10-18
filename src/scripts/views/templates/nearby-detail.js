/* eslint-disable indent */
import CONFIG from '../../global/config';

const nearbyDetail = (dataResto) => `
  <div class="detail">
    <div tabindex="0" class="detail-card-info">
      <div tabindex="0" class="img-container">
          <img class="detail-img" alt="${dataResto.name}" src="${CONFIG.BASE_IMAGE_URL + dataResto.pictureId}"/>
      </div>

      <ul tabindex="0" class="detail-info">
        <li tabindex="0">
          <i title="restaurant" class="fas fa-store icon-primary"></i>
          <p class="name detail-name-address-rating">${dataResto.name}</p>
        </li>

        <li tabindex="0">
          <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
          <p class="detail-name-address-rating">${dataResto.address}, ${dataResto.city}</p>
        </li>

        <li tabindex="0">
          <i title="ratings" class="fas fa-star icon-primary"></i>
          <p class="detail-name-address-rating">${dataResto.rating}</p>
        </li>

        <li tabindex="0">${dataResto.categories
          .map(
            (category) => `
              <span class="category">${category.name}</span>
            `,
          )
          .join('')}
        </li>
        
        <li tabindex="0"><p class="detail-desc">${dataResto.description}</p></li>
      </ul>
    </div>

    <h3 tabindex="0">Menu</h3>
    <div class="cards-menu">
      <div tabindex="0" class="card-menu">
        <h4 tabindex="0">Makanan</h4>
        <ul tabindex="0">
          ${dataResto.menus.foods
            .map(
              (food, i) => `
                <li><p>${i + 1}) ${food.name}</p></li>
              `,
            )
            .join('')}
        </ul>
      </div>

      <div tabindex="0" class="card-menu">
        <h4 tabindex="0">Minuman</h4>
        <ul tabindex="0">
          ${dataResto.menus.drinks
            .map(
              (drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>
              `,
            )
            .join('')}
        </ul>
      </div>
    </div>

    <h3 tabindex="0" class="title-review">Reviews</h3>
    <div tabindex="0" class="form-review">
      <div class="card-form-detail">
        <img tabindex="0" class="detail-img" src="./images/review-logo-400.jpg" alt="Gambar background untuk review">
      </div>

      <div class="card-form-detail">  
        <form tabindex="0" autocomplete="on">
          <div class="input-form-review">
            <label tabindex="0" for="name-input" class="form-label">Nama Lengkap:</label>
            <input tabindex="0" type="text" class="form-control" id="name-input" minlength="1" maxlength="50" placeholder="Masukkan nama Anda" required>
          </div>

          <div class="input-form-review">
            <label tabindex="0" for="review-input" class="form-label">Review:</label>
            <input tabindex="0" type="text" class="form-control" id="review-input" minlength="1" maxlength="100" placeholder="Masukkan review Anda" required>
          </div>

          <button tabindex="0" id="submit-review" type="submit" class="button-submit"><i class="fas fa-paper-plane"></i> Kirim</button>
        </form>
      </div>
    </div>

  <div tabindex="0" class="detail-review">
    ${dataResto.customerReviews
      .map(
        (dataReview) => `
          <div tabindex="0" class="detail-review-list">
          <img tabindex="0" src="./images/user-logo-400.jpg" alt="Gambar user review">
            <p tabindex="0" class="review-name">${dataReview.name}</p>
            <p  tabindex="0"class="review-date">${dataReview.date}</p>
            <blockquote tabindex="0">
              ${dataReview.review}
            </blockquote>
          </div>
        `,
      )
      .join('')}
    </div>
  </div>
`;

export default nearbyDetail;
