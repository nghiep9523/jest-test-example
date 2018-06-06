import reducer from '../navigator'
import * as types from '../../constants/ActionTypes'

const initialState = {
    route: {
        path: ['songs'],
        query: {q: 'house'}
    }
}

describe('navigator reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    })
    it('should handle CHANGE_PATH', () => {
        expect(reducer(initialState, {
                type: types.CHANGE_PATH,
                route: {
                    path: ['wo'],
                    query: {q: 'lolo'}
                }
            }
        )).toEqual({
                route: {
                    path: ['wo'],
                    query: {q: 'lolo'}
                }
            })
        })
})