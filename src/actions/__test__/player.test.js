import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../../constants/ActionTypes'
import * as playerActions from '../player'
import {CHANGE_TYPES} from '../../constants/SongConstants'

const status = 'test'
const time = 69
const songIndex = 2
const playlists = [
    {
        items:[]
    }
]
const player = {
    currentSongIndex: 2,
    currentTime: 0,
    selectedPlaylists: [
        {
            items:[
                {},
                {},
                {},
                {}
            ]
        }
    ],
    status: 'init'
}
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('ChangePlayerStatusAction', () => {
    it('Should change player status', () => {
        const selectedStatus = status
        const expectedAction = {
            type: types.CHANGE_PLAYER_STATUS,
            status: selectedStatus
        }
        expect(playerActions.changePlayerStatus(selectedStatus)).toEqual(expectedAction)
    })  
})

describe('ChangeCurrentTimeAction', () => {
    it('Should change current time', () => {
        const selectedTime = time
        const expectedAction = {
            type: types.CHANGE_CURRENT_TIME,
            time: selectedTime
        }
        expect(playerActions.changeCurrentTime(selectedTime)).toEqual(expectedAction)
    })  
})

describe('ChangePlayingSongAction', () => {
    it('Should change playing song', () => {
        const selectedSongIndex = songIndex
        const expectedAction = {
            type: types.CHANGE_PLAYING_SONG,
            songIndex: selectedSongIndex
        }
        expect(playerActions.changePlayingSong(selectedSongIndex)).toEqual(expectedAction)
    })  
})

describe('ChangeSelectedPlaylistsAction', () => {
    it('Should change playlist', () => {
        const selectedPlaylists = playlists
        const expectedAction = {
            type: types.CHANGE_SELECTED_PLAYLISTS,
            playlists: selectedPlaylists
        }
        expect(playerActions.changeSelectedPlaylists(selectedPlaylists)).toEqual(expectedAction)
    })  
})

describe('ChangeSong', () => {
    it('Should change to next song', async () => {
        const selectedChangeType = CHANGE_TYPES.NEXT
        const expectedAction = [
            {
                type: types.CHANGE_PLAYING_SONG,
                songIndex: player.currentSongIndex + 1
            }
        ]
        const initialState = {
            player: player,
            playlists: playlists
        }
        const store = mockStore(initialState)
        await store.dispatch(playerActions.changeSong(CHANGE_TYPES.NEXT))
        expect(store.getActions()).toEqual(expectedAction)
    })
    it('Should change to previous song', async () => {
        const selectedChangeType = CHANGE_TYPES.PREV
        const expectedAction = [
            {
                type: types.CHANGE_PLAYING_SONG,
                songIndex: player.currentSongIndex - 1
            }
        ]
        const initialState = {
            player: player,
            playlists: playlists
        }
        const store = mockStore(initialState)
        await store.dispatch(playerActions.changeSong(CHANGE_TYPES.PREV))
        expect(store.getActions()).toEqual(expectedAction)
    })
})

describe('PlaySong', () => {
    it('Should play song', () => {
        const selectedPlaylists = playlists
        const expectedAction = {
            type: types.CHANGE_SELECTED_PLAYLISTS,
            playlists: selectedPlaylists
        }
        expect(playerActions.changeSelectedPlaylists(selectedPlaylists)).toEqual(expectedAction)
    })  
})