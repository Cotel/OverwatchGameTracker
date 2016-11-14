import {GET_CHART_DATA} from '../actions';

const initialState = {
    chartData: []
}

export function chartReducer(state=initialState, action) {
    switch (action.type) {
        case GET_CHART_DATA:
            return Object.assign({}, state, {chartData: action.payload});
        default:
            return state
    }
}