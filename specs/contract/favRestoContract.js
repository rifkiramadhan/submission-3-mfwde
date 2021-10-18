const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the Resto that has been added', async () => {
    favoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
    favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteResto.getResto('rqdv5juczeskfw1e867')).toEqual({
      id: 'rqdv5juczeskfw1e867',
    });
    expect(await favoriteResto.getResto('s1knt6za9kkfw1e867')).toEqual({
      id: 's1knt6za9kkfw1e867',
    });
    expect(await favoriteResto.getResto('w9pga3s2tubkfw1e867')).toEqual(undefined);
  });

  it('should refuse a Resto from being added if it does not have the correct property', async () => {
    favoriteResto.putResto({ aProperty: 'property' });

    expect(await favoriteResto.getAllResto()).toEqual([]);
  });

  it('can return all of the Restos that have been added', async () => {
    favoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
    favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteResto.getAllResto()).toEqual([
      { id: 'rqdv5juczeskfw1e867' },
      { id: 's1knt6za9kkfw1e867' },
    ]);
  });

  it('should remove favorite Resto', async () => {
    favoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
    favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });
    favoriteResto.putResto({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteResto.deleteResto('rqdv5juczeskfw1e867');

    expect(await favoriteResto.getAllResto()).toEqual([
      { id: 's1knt6za9kkfw1e867' },
      { id: 'w9pga3s2tubkfw1e867' },
    ]);
  });

  it('should handle request to remove a Resto even though the Resto has not been added', async () => {
    favoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
    favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });
    favoriteResto.putResto({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteResto.deleteResto(4);

    expect(await favoriteResto.getAllResto()).toEqual([
      { id: 'rqdv5juczeskfw1e867' },
      { id: 's1knt6za9kkfw1e867' },
      { id: 'w9pga3s2tubkfw1e867' },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestoModel };
