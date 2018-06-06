import reducer from '../index';

describe('root reducer', () => {
  it('should combine all reducers', () => {
    expect(reducer(undefined, {})).toEqual({
        entities: {
            songs: {},
            users: {}
        },
        player: {
            currentSongIndex: null,
            currentTime: 0,
            selectedPlaylists: [],
            status: 'init'
        },
        playlist: 'house',
        playlists: {}
    });
  });
});