import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../../constants/ActionTypes'
import * as navigatorActions from '../navigator'

const route = {
    path: ['CDE', 'FGH'],
    query: 'aa'
};
const event = {
    state: {
        route : {
            path: ['CDE', 'FGH'],
            query: 'aa'
        }
    }
};

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('ChangePathAction', () => {
    it('Should change path', () => {
        const selectedRoute = route
        const expectedAction = {
            type: types.CHANGE_PATH,
            route: selectedRoute
        }
        expect(navigatorActions.changePath(selectedRoute)).toEqual(expectedAction)
    })  
})

describe('NavigateToAction', () => {
    it('Should Navigate To', async () => {
        const selectedRoute = route
        const initialState = {
            navigator: {
                route : {
                    path: ['ABC', 'DEF'],
                    query: 'aa'
                }
            }
        }
        const store = mockStore(initialState)
        const expectedAction = [{
            type: types.CHANGE_PATH,
            route: selectedRoute
        }]
        await store.dispatch(navigatorActions.navigateTo(selectedRoute, false))
        expect(store.getActions()).toEqual(expectedAction)
    })  
})

describe('NavigateBackAction', () => {
    it('Should Navigate back', async () => {
        const selectedEvent = event
        const initialState = {
            navigator: {
                route : {
                    path: ['ABC', 'DEF'],
                    query: 'aa'
                }
            }
        }
        const store = mockStore(initialState)
        const expectedAction = [{
            type: types.CHANGE_PATH,
            route: selectedEvent.state.route
        }]
        await store.dispatch(navigatorActions.navigateBack(selectedEvent))
        expect(store.getActions()).toEqual(expectedAction)
    })  
})

