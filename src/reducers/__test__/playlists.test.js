import * as types from '../../constants/ActionTypes'
import reducer from '../playlists'

describe('playlist reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    })
    it('should handle RECEIVE_SONGS', () => {
        expect(reducer({}, {
            type: types.RECEIVE_SONGS,
            playlist: 'a',
            songs: ['xyz'],
            nextUrl: 'a'
        })).toEqual({
           'a': {
               isFetching: false,
               items: ['xyz'],
               nextUrl: 'a'
           }
        })
    })
    it('should handle REQUEST_SONGS', () => {
        expect(reducer({}, {
            type: types.REQUEST_SONGS,
            playlist: 'a'
        })).toEqual({
            'a': {
                isFetching: true,
                items: [],
                nextUrl: null
            }
        })
    })
})