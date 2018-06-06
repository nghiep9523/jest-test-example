import reducer from '../entities'
import * as types from '../../constants/ActionTypes'

const initialState = {
    songs: {},
    users: {}
}

describe('entities reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    })
it('should handle merge state', () => {
    expect(reducer(initialState, {
        entities: {
            songs: {
                title: '123'
            },
            users: {
                user_id: '123'
            }
        }
    })).toEqual({
            songs: {
                title: '123'
            },
            users: {
                user_id: '123'
            }
        })
    })
})