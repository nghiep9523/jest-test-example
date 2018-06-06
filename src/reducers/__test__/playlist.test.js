import reducer from '../playlist'
import * as types from '../../constants/ActionTypes'

const initialState = 'house'

describe('playlist reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })
    it('should handle CHANGE_PLAYLIST', () => {
        expect(reducer(initialState, {
            type: types.CHANGE_PLAYLIST,
            playlist: 'home'
        })).toEqual('home')
    })
})