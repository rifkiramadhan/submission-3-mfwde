import NearbySource from '../data/resto-source';

const PostReview = async (url, name, review) => {
  const inputFormReview = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.detail-review');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const postCardReview = `
    <div class="detail-review-list">
    <img tabindex="0" src="./images/user-logo-400.jpg" alt="Gambar user review"/>
      <p tabindex="0" class="review-name">${name}</p>
      <p tabindex="0"class="review-date">${date}</p>
      <div class="review-body">
        <blockquote tabindex="0">
              ${review}
        </blockquote>
      </div>
    </div>
  `;

  // POST Card Review
  const reviewResponse = await NearbySource.postRestaurantReview(inputFormReview);
  console.log(
    '📩 Post review berhasil dijalankan',
    reviewResponse,
  );

  // Append postCardReview to the review container
  reviewContainer.innerHTML += postCardReview;
};

export default PostReview;
