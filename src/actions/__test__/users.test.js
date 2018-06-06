import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../../constants/ActionTypes'
import * as usersActions from '../users'

const entities = {
    songs: {
        2: {
            title: "123",
            user_id: 123
        }
    },
    users: {}
}

const user_id = 123

const songs = [2]

const playlist = "123"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('UserReceiveSongsAction', () => {
    it('Should receive song', () => {
        const selectedSongs = songs
        const selectedEntities = entities
        const playlist = playlist
        const expectedAction =  {
            type: types.RECEIVE_SONGS,
            entities: selectedEntities,
            nextUrl: null,
            playlist: playlist,
            songs: selectedSongs
        }
        expect(usersActions.receiveSongs(selectedSongs, selectedEntities, playlist)).toEqual(expectedAction)
    })
})

describe('UserReceiveUserFollowing', () => {
    it('Should receive user following', () => {
        const selectedEntities = entities
        const expectedAction =  {
            type: types.RECEIVE_USER_FOLLOWINGS,
            entities: selectedEntities
        }
        expect(usersActions.receiveUserFollowings(selectedEntities)).toEqual(expectedAction)
    })
})

describe('UserReceiveUser', () => {
    it('Should receive user', () => {
        const selectedEntities = entities
        const expectedAction =  {
            type: types.RECEIVE_USER,
            entities: selectedEntities
        }
        expect(usersActions.receiveUser(selectedEntities)).toEqual(expectedAction)
    })
})

describe('UserReceiveUserProfile', () => {
    it('Should receive user profile', () => {
        const selectedEntities = entities
        const expectedAction =  {
            type: types.RECEIVE_USER_PROFILES,
            entities: selectedEntities
        }
        expect(usersActions.receiveUserProfiles(selectedEntities)).toEqual(expectedAction)
    })
})

describe('UserRequestUser', () => {
    it('Should request user', () => {
        const selectedUserId = user_id
        const expectedAction =  {
            type: types.REQUEST_USER,
            userId: selectedUserId
        }
        expect(usersActions.requestUser(selectedUserId)).toEqual(expectedAction)
    })
})
