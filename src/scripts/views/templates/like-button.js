const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="Menghapus restaurant" id="likeButton" class="like-button">
    <i class="far fa-bookmark" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="Menyimpan restaurant" id="likeButton" class="like-button">
    <i class="fas fa-bookmark" aria-hidden="true"></i>
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
