import NearbySource from '../src/scripts/data/resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="like-button" id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await NearbySource.putResto({ id: 'rqdv5juczeskfw1e867' });
  });

  afterEach(async () => {
    await NearbySource.deleteResto('rqdv5juczeskfw1e867');
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    expect(
      document.querySelector('[aria-label="Menyimpan restaurant"]'),
    ).toBeTruthy();
  });

  it('should not display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    expect(
      document.querySelector('[aria-label="Menghapus restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    document
      .querySelector('[aria-label="Menyimpan restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await NearbySource.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    await NearbySource.deleteResto('rqdv5juczeskfw1e867');
    document
      .querySelector('[aria-label="Menyimpan restaurant"]')
      .dispatchEvent(new Event('click'));
    const allResto = await NearbySource.getAllResto();

    expect(allResto).toEqual([]);
  });
});
