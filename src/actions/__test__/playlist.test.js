import * as types from '../../constants/ActionTypes'
import * as playlistActions from '../playlists'

const playlist = {}

describe('ChangePlaylistAction', () => {
    it('Should change playlist', () => {
        const selectedPlaylist = playlist
        const expectedAction = {
            type: types.CHANGE_PLAYLIST,
            playlist: playlist
        }
        expect(playlistActions.changePlaylist(selectedPlaylist)).toEqual(expectedAction)
    })  
})


  