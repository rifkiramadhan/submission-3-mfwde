import CONFIG from '../../global/config';

const nearbyCard = (dataResto) => `
<div tabindex="0" class="card">
<a href="#/resto/${dataResto.id}" class="card-a-tag">
  <div class="img-container">
    <img tabindex="0" class="card-image lazyload" crossorigin="anonymous" src="./images/loading-300.jpg" alt="${dataResto.name}" data-src="${CONFIG.BASE_IMAGE_URL + dataResto.pictureId}" />
    <span tabindex="0" class="card-rating">
      <i title="ratings" class="fa fa-star"></i>
      <span>${dataResto.rating}</span>
    </span>
  </div>

  <div tabindex="0" class="card-content">
    <h2 class="card-content-title">${dataResto.name} - ${dataResto.city}</h2>
    <p class="truncate">${dataResto.description}</p>
  </div>
</a>
</div>
  `;

export default nearbyCard;
