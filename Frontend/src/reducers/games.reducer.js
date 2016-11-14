import {SHOW_GAMES, ADD_GAME, SELECT_GAME} from '../actions';

const initialState = {
    list: [],
    activeGame: null
}

export function gamesReducer(state=initialState, action) {
    switch (action.type) {
        case SHOW_GAMES:
            return Object.assign({}, state, {list: action.payload, activeGame: null})
        case ADD_GAME:
            const nList = state.list.slice()
            nList.push(action.payload)
            return Object.assign({}, state, {list: nList, activeGame: state.activeGame})
        case SELECT_GAME:
            return Object.assign({}, state, {list: state.list, activeGame: action.payload})
        default:
            return state
    }
}