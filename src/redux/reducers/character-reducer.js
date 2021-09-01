import StateManager from 'react-select';
import { characterActionTypes } from '../actions/character-action-types';

const initState = {
    characters: [],
    fetching: false,
    error: undefined,
    characterSelected: ''
};

export const characterReducer = (state = initState, action) => {
    switch (action.type) {
        case characterActionTypes.CHARACTER_LIST_START:
            return {
                ...state,
                fetching: true,
                characters: [],
                error: undefined
            };
        case characterActionTypes.CHARACTER_LIST_END:
            return {
                ...state,
                fetching: false,
                characters: action.payload,
                error: undefined
            };
        case characterActionTypes.CHARACTER_LIST_ERROR:
            return {
                ...state,
                fetching: false,
                characters: [],
                error: action.payload
            };
        case characterActionTypes.SET_CHARACTER_SELECTED:
            return {
                ...state,
                characterSelected: action.payload
            };
        default:
            return state;
    }
};