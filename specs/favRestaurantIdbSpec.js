import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';
import NearbySource from '../src/scripts/data/resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await NearbySource.getAllResto()).forEach(async (resto) => {
      await NearbySource.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(NearbySource);
});
