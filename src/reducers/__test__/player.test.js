import reducer from '../player'
import * as types from '../../constants/ActionTypes'

const initialState = {
    currentSongIndex: null,
    currentTime: 0,
    selectedPlaylists: [],
    status: 'init'
}

describe('player reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    })
    it('should handle CHANGE_CURRENT_TIME', () => {
        expect(reducer(initialState, {
                type: types.CHANGE_CURRENT_TIME,
                time: 1
            }
        )).toEqual({
            currentSongIndex: null,
            currentTime: 1,
            selectedPlaylists: [],
            status: 'init'
            })
        })
    it('should handle CHANGE_PLAYING_SONG', () => {
        expect(reducer(initialState, {
                type: types.CHANGE_PLAYING_SONG,
                songIndex: 1
            }
        )).toEqual({
            currentSongIndex: 1,
            currentTime: 0,
            selectedPlaylists: [],
            status: 'init'
            })
        })
    it('should handle CHANGE_PLAYING_SONG', () => {
        expect(reducer(initialState, {
                type: types.CHANGE_SELECTED_PLAYLISTS,
                playlists: ['abc']
            }
        )).toEqual({
            currentSongIndex: null,
            currentTime: 0,
            selectedPlaylists: ['abc'],
            status: 'init'
            })
        })
    it('should handle CHANGE_PLAYER_STATUS', () => {
        expect(reducer(initialState, {
                type: types.CHANGE_PLAYER_STATUS,
                status: 'playing'
            }
        )).toEqual({
            currentSongIndex: null,
            currentTime: 0,
            selectedPlaylists: [],
            status: 'playing'
            })
        })
})
