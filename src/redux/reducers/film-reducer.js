import StateManager from 'react-select';
import { filmActionTypes } from '../actions/films-action-types';
const initState = {
    films: [],
    fetching: false,
    error: undefined,
};

export const filmReducer = (state = initState, action) => {
    switch (action.type) {
        case filmActionTypes.FILM_LIST_START:
            return {
                ...state,
                fetching: true,
                films: [],
                error: undefined
            };
        case filmActionTypes.FILM_LIST_END:
            return {
                ...state,
                fetching: false,
                films: action.payload,
                error: undefined
            };
        case filmActionTypes.FILM_LIST_ERROR:
            return {
                ...state,
                fetching: false,
                films: [],
                error: action.payload
            };
        default:
            return state;
    }
};