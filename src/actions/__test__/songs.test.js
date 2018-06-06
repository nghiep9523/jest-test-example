import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../../constants/ActionTypes'
import * as songsActions from '../songs'

const entities = {
    songs: {
        2: {
            title: "123",
            user_id: 123
        }
    },
    users: {}
}
const playlists = [
    "1234": {
        items:[]
    }
]

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('FetchSongIfNeededAction', () => {
    it('Should fetch song', async () => {
        const selectedSongId = 1
        const expectedAction = [
            {
                type: types.REQUEST_SONG,
                songId: selectedSongId
            }
        ]
        const initialState = {
            entities: entities,
            playlists: playlists
        }
        const store = mockStore(initialState)
        await store.dispatch(songsActions.fetchSongIfNeeded(selectedSongId))
        expect(store.getActions()).toEqual(expectedAction)
    })
    it('Should receive song', async () => {
        const selectedSongId = 2
        const expectedAction = [
            {
                type: types.RECEIVE_SONGS,
                entities: {},
                nextUrl: null,
                playlist: entities.songs[2].title,
                songs: [selectedSongId]
              }
        ]
        const initialState = {
            entities: entities,
            playlists: playlists
        }
        const store = mockStore(initialState)
        await store.dispatch(songsActions.fetchSongIfNeeded(selectedSongId))
        expect(store.getActions()).toEqual(expectedAction)
    })
})

describe('ReceiveSongAction', () => {
    it('Receive song', () => {
        const selectedEntities = entities
        const expectedAction = {
            type: types.RECEIVE_SONG,
            entities: selectedEntities
        }
        expect(songsActions.receiveSong(selectedEntities)).toEqual(expectedAction)
    })
})