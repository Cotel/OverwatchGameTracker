import axios from 'axios';

export const SHOW_GAMES = 'SHOW_GAMES';
export const ADD_GAME = 'ADD_GAME';
export const SELECT_GAME = 'SELECT_GAME';
export const GET_CHART_DATA = 'GET_CHART_DATA';

export function showGames() {
    return (dispatch, getState) => {
        axios.get("http://localhost:8080/api/games")
            .then((response) => {
                dispatch (
                    {
                        type: SHOW_GAMES,
                        payload: response.data
                    }
                )
            })
    }
    
}

export function getChartData() {
    return (dispatch, getState) => {
        axios.get("http://localhost:8080/api/chartData")
            .then((response) => {
                dispatch (
                    {
                        type: GET_CHART_DATA,
                        payload: response.data
                    }
                )
            })
    }
}

export function addGame(values) {
    let game = {
        map: values.map || "NUMBANI",
        date: new Date(values.date),
        winned: values.winned || false
    }

    return (dispatch, getState) => {
        axios.post("http://localhost:8080/api/games", game)
            .then((response) => {
                dispatch (
                    {
                        type: ADD_GAME,
                        payload: game
                    }
                )
            })
    }
}

export function selectGame(game) {
    console.log(game)
    return (
        {
            type: SELECT_GAME,
            payload: game
        }
    )
}