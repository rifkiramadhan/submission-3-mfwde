import NearbySource from '../src/scripts/data/resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="like-button" id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    expect(
      document.querySelector('[aria-label="Menghapus restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    expect(
      document.querySelector('[aria-label="Menyimpan restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await NearbySource.getResto('rqdv5juczeskfw1e867');
    expect(resto).toEqual({ id: 'rqdv5juczeskfw1e867' });

    await NearbySource.deleteResto('rqdv5juczeskfw1e867');
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    await NearbySource.putResto({ id: 'rqdv5juczeskfw1e867' });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await NearbySource.getAllResto();
    expect(allResto).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);

    await NearbySource.deleteResto('rqdv5juczeskfw1e867');
  });

  // menggunakan metode xit, bukan it
  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await NearbySource.getAllResto();
    expect(allResto).toEqual([]);
  });
});
