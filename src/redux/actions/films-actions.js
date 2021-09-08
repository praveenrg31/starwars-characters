import { filmActionTypes } from './films-action-types';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const startFetchFilms = () => {
    return {
        type: filmActionTypes.FILM_LIST_START,
        payload: []
    }
}

const endFetchFilms = (characters) => {
    return {
        type: filmActionTypes.FILM_LIST_END,
        payload: characters
    }
}

const errorFetchFilms = (error) => {
    return {
        type: filmActionTypes.FILM_LIST_ERROR,
        payload: error
    }
}

export const fetchFilmList = () => {
    return (dispatch, getState) => {
        dispatch(startFetchFilms());
        const films = getState().characterState.characters.filter(e => e.id === getState().characterState.characterSelected);
        if(!films.length) {
            dispatch(errorFetchFilms('No Films found'));
            return;
        }

        const filmApiList = films[0].films;

        if(!filmApiList.length) {
            dispatch(errorFetchFilms('No films for the character selected'));
            return;
        }

        Promise.all(filmApiList.map(e => axios.get(e)))
            .then(responses => {          
                if(responses.length) {
                    responses.sort((a, b) => {
                        return new Date(b.data.release_date) - new Date(a.data.release_date);
                    });
                    dispatch(endFetchFilms(responses.map(e => (
                            {
                                id: e.data.episode_id,
                                title: e.data.title, 
                                releaseDate: e.data.release_date,
                                director: e.data.director,
                                producer: e.data.producer
                            }))));
                }
                else {
                    dispatch(errorFetchFilms('Error fetching films')); 
                }
            })
            .catch(err => {
                dispatch(errorFetchFilms(err.message || 'Failed to fetch characters'));
            });
        };
}; 