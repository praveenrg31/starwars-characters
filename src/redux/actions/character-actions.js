
import { characterActionTypes } from './character-action-types';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const startFetchCharacters = () => {
    return {
        type: characterActionTypes.CHARACTER_LIST_START,
        payload: []
    }
}

const endFetchCharacters = (characters) => {
    return {
        type: characterActionTypes.CHARACTER_LIST_END,
        payload: characters
    }
}

const errorFetchCharacters = (error) => {
    return {
        type: characterActionTypes.CHARACTER_LIST_ERROR,
        payload: error
    }
}

export const fetchCharacterList = () => {
    return (dispatch) => {
        dispatch(startFetchCharacters());
        axios.get(`${apiUrl}people`)
            .then(response => {
                let people = [];
                people = response.data.results;
                dispatch(endFetchCharacters(people.map((e, i) => ({ name: e.name, id: i + 1, films: e.films }))));
            })
            .catch(err => {
                dispatch(errorFetchCharacters(err.message || 'Failed to fetch characters'));
            })
    };
};

export const setCharacterSelected = (character) => {
    return (dispatch) => {
        dispatch({
            type: characterActionTypes.SET_CHARACTER_SELECTED,
            payload: character
        });
    };
};